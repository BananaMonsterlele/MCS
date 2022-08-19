"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useFetch;

var _react = require("react");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useFetch() {
  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      loader = _useState2[0],
      setLoader = _useState2[1];

  function get(url) {
    return new Promise(function (resolve, reject) {
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (!data) {
          setLoader(false);
          return reject(data);
        }

        setLoader(false);
        resolve(data);
      })["catch"](function (error) {
        setLoader(false);
        reject(error);
      });
    });
  }

  function post(url, body) {
    return new Promise(function (resolve, reject) {
      fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (!data) {
          setLoader(false);
          return reject(data);
        }

        setLoader(false);
        resolve(data);
      })["catch"](function (error) {
        setLoader(false);
        reject(error);
      });
    });
  }

  var memoGet = (0, _react.useCallback)(function (url) {
    return get(url);
  }, []);
  return {
    memoGet: memoGet,
    post: post,
    loader: loader
  };
}