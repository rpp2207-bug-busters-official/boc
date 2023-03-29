export default function getOperatorsFilters (filterArray) {
  let ofilters = [];
  if(filterArray.operators.length!==0) {
   ofilters=filterArray.operators.map((operator)=>{
     return ['in', operator, ['string', ['get', 'poi']]];
    });
  }
  return ofilters;
}