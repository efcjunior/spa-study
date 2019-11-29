/*
 *spa.util.js
 *GeneralJavaScriptutilities
 *
 *MichaelS.Mikowski-mmikowskiatgmaildotcom
 *These are routines I have created,compiled,and updated
 *since1998,withinspirationfromaroundtheweb.
 *
 *MIT License
 */

/**
 * spa.util.js
 * Root namespace module
 */

/*
    jslint browser:true,
    continue:true,
    devel:true,
    indent:2,
    maxerr:50,
    newcap:true,
    nomen:true,
    plusplus:true,
    regexp:true,
    sloppy:true,
    vars:false,
    white:true
*/
/*global $,spa */

spa.util = (function() {
  var makeError, setConfigMap;
  //BeginPublicconstructor/makeError///Purpose:aconveniencewrappertocreateanerrorobject//Arguments://*name_text-theerrorname//*msg_text-longerrormessage//*data-optionaldataattachedtoerrorobject//Returns:newlyconstructederrorobject//Throws:none//
  makeError = function(name_text, msg_text, data) {
    var error = newError();
    error.name = name_text;
    error.message = msg_text;
    if (data) {
      error.data = data;
    }
    return error;
  };
  //EndPublicconstructor/makeError///BeginPublicmethod/setConfigMap///Purpose:Commoncodetosetconfigsinfeaturemodules//Arguments://*input_map-mapofkey-valuestosetinconfig//*settable_map-mapofallowablekeystoset//*config_map-maptoapplysettingsto//Returns:true//Throws:Exceptionifinputkeynotallowed//
  setConfigMap = function(arg_map) {
    var input_map = arg_map.input_map,
      settable_map = arg_map.settable_map,
      config_map = arg_map.config_map,
      key_name,
      error;
    for (key_name in input_map) {
      if (input_map.hasOwnProperty(key_name)) {
        if (settable_map.hasOwnProperty(key_name)) {
          config_map[key_name] = input_map[key_name];
        } else {
          error = makeError(
            "Bad Input",
            "Settin config key |" + key_name + "| is not supported"
          );
          throw error;
        }
      }
    }
  };
  //EndPublicmethod/setConfigMap/
  return {
    makeError: makeError,
    setConfigMap: setConfigMap
  };
})();
