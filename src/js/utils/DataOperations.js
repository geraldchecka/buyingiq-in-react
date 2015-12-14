import _ from 'lodash';

var DataOperations = {
  //Missed: categories, operatin system, memory_ram
  folderItems: {
    brands: "brands",
    biq_score_range: "biq_score_range",
    price_range: "price_range",
    handset_type: "handset_type",
    inbuilt_features: "inbuilt_features",
    camera_pixels: "camera_pixels",
    keyboard_type: "keyboard_type",
    screen_size: "screen_size",
    processor_speed: "processor_speed"
  },
  //Gets all mobile folders
  getMobileFolders: function(inputData) {
    var result,
        self = this;

    result = _.filter(inputData, function(item) {
      if (item.uri === self.folderItems[item.uri])
        return true;
    });
    return result;
  },
  //Get Brand facets
  getBrandFacets: function(brand) {
    //Compute all facets with count > 0 for each and every brand 
    return [];
  }
};

module.exports = DataOperations;