import { underlineToUpperCase } from "../shared";
import { TObjectAny } from "../types";

export function autoInterface(
  suffix: string,
  message: string,
  _data: TObjectAny,
  isHide: boolean = true
) {
  if (isHide) {
    return;
  }
  const result1: string[] = [];
  const names: any = {};
  parse(_data, suffix, true);

  function cutRepeate({ item, n, res, _names, d }: any) {
    const values = Object.keys(item).map((map) => {
      return typeof map;
    });
    const keys = Object.keys(item);
    const temp = `${keys.join("")}-${values.join("")}`;
    const current = _names[`${suffix}${n}`];
    if (current) {
      if (current.temp === temp) {
        current.count += 1;
      } else {
        current.count += 1;
        parse(item, `${suffix}${n}${current.count}`);
        return `${suffix}${n}${current.count}`;
      }
    } else {
      parse(item, `${suffix}${n}`);
      _names[`${suffix}${n}`] = {
        count: 1,
        temp,
      };
    }
  }

  function format(
    data: TObjectAny,
    name: string,
    isfirst?: boolean,
    isArray?: boolean
  ) {
    let res: any = {};
    for (let d in data) {
      const item = data[d];
      if (item === null) {
        res[d] = null;
      } else if (typeof item === "function") {
        res[d] = "() => void";
      } else if (item instanceof Array) {
        if (item[0] instanceof Object) {
          const n = underlineToUpperCase(d);
          const r = cutRepeate({ item: item[0], n, res, names, d });
          res[d] = r ? `${r}[]` : `${suffix}${n}[]`;
        } else {
          let type = null;
          for (let i = 0; i < item.length; i++) {
            const cur = item[i];
            if (!type) {
              type = typeof cur;
            }
            if (type === typeof cur) {
              continue;
            } else {
              type = null;
              break;
            }
          }
          res[d] = `${type ? type : "any"}[]`;
        }
      } else if (item instanceof Object) {
        const n = underlineToUpperCase(d);
        const r = cutRepeate({
          item,
          n,
          res,
          names,
          d,
        });
        res[d] = r ? r : `${suffix}${n}`;
      } else {
        res[d] = typeof item;
      }
    }
    result1[result1.length] = `export${
      isfirst ? " default" : ""
    } interface ${name} ${JSON.stringify(res)}${isArray ? "[]" : ""}`
      .replace(/\{/g, "{\n\t")
      .replace(/\}/g, "\n}")
      .replace(/\"/g, "")
      .replace(/\:/g, "?:")
      .replace(/\,/g, ";\n\t");
    return res;
  }

  function parse(data: any, name: string, isfirst?: boolean) {
    if (data instanceof Array) {
      if (data[0] instanceof Object) {
        format(data[0], name, isfirst, true);
      } else {
        let type = null;
        for (let i = 0; i < data.length; i++) {
          const cur = data[i];
          if (!type) {
            type = typeof cur;
          }
          if (type === typeof cur) {
            continue;
          } else {
            type = null;
            break;
          }
        }
        result1.push(
          `export${isfirst ? " default" : ""} interface ${name} ${
            type ? type : "any"
          }[]`
        );
      }
      return;
    }

    format(data, name, isfirst);
  }
  return `// ${suffix}${message}\n\n${result1.join("\n")}`;
}
