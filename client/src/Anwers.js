const Answers = [
    {
        id: 1,
        answer:
            `
        return a + b;
        `
    },
    {
        id: 2,
        answer:
        `
        return a < b ? a : b;
        `
    },
    {
        id: 3,
        answer:
        `
        let res = [];
        arr.forEach((item) => {
            if (item) {

            res.push(item)}
        })

        return res;
        `
    },
    {
        id: 4,
        answer:
        `
        return arr.slice(1);
        `
    },
    {
        id: 5,
        answer:
        `
        let res = "";
        for (let i = 0; i < str.length; i++) {
            if (i !== charPos) {
                res += str[i];
            }
        }
        return res;
        `
    },
    {
        id: 6,
        answer:
        `
        const words = str.split("");
        const newW = [];

        words.forEach((w) => {
            if (w === w.toUpperCase()) {
              newW.push(w.toLowerCase());
          } else {
              newW.push(w.toUpperCase());
          }
        })

          return  newW.join("");
        `
    },
    {
        id: 7,
        answer:
        `
        str = str.toLowerCase().replace(/[^а-яa-z1-9]/gi, '');
        const lastIndex = str.length - 1;
        for (let i = 0; i < str.length / 2; i++) {
            if (str[i] !== str[lastIndex - i]) {
                return false;
            }
        }
        return true;
        `
    },
    {
        id: 8,
        answer:
        `
        const arr = ["a", "e", "i", "o", "u"];
        let counter = 0;

      const s = str.split("");
        s.forEach((item) => {
           if (arr.includes(item)) {
              counter++;
          }
      })

      return counter;
        `
    },
    {
        id: 9,
        answer:
        `
        const arr = str.split(" ");
        let index = arr[0].length;

        arr.forEach((item) => {
          if (item.length < index) {
                index = item.length;
          }
      });

    return index;
        `
    }
];
