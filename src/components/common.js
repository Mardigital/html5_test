const _common = {

  capitalize: str => str.charAt(0).toUpperCase() + str.slice(1),

  copy: state => Array.isArray(state) ? [...state] : {...state},

  order: (arr, value, reverse) =>
    reverse ?
    arr.sort((a,b) => {
      if(a[value].toLowerCase() < b[value].toLowerCase()) return 1;
      if(a[value].toLowerCase() > b[value].toLowerCase()) return -1;
      return 0;
    }) :
    arr.sort((a,b) => {
      if(a[value].toLowerCase() < b[value].toLowerCase()) return -1;
      if(a[value].toLowerCase() > b[value].toLowerCase()) return 1;
      return 0;
    }),

  currentId: (id, database) => {
    for(let i=0; i<=database.length;i++) {
      if (database[i].id === id) return i;
    }
  },

}

export default _common;
