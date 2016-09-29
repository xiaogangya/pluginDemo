export function getPlugins() {
  return new Promise((resolve, reject) => {
    return fetch('https://rawgit.com/xiaogangya/pluginStore/master/plugins.json', {
      method: 'get'
    }).then(response => {
      return response.json();
    }).then(data => {
      resolve(data);
    }).catch(reason => {
      return [];
    });
  });
}