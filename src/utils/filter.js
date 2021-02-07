export default {
  by: function(array, value) {
    if (value == '♀') value = 'female'
    else value = 'male'
    return array.filter((i) => i.gender == value)
  }
};
