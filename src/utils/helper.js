export const filterData = (searchText, restaurant) => {
  const filtereddata = restaurant.filter((restaurant) => restaurant.data.name.toLowerCase().includes(searchText.toLowerCase()));
  return filtereddata;
}; 
