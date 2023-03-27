 export default function getConnectionsFilters (filterArray) {
  let cfilters = [];
  if(filterArray.connections.length!==0) {
    cfilters = filterArray.connections.map((connection)=>{
      return ['in', connection, ['string', ['get', 'connectionType']]];
  });

  };

  return cfilters;
}