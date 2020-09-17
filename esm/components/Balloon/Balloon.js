var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import styled, { css } from 'styled-components';
import { useTheme } from '../../hooks/useTheme';
var balloonFactory = function (theme) { return function (_a) {
    var horizontal = _a.horizontal, vertical = _a.vertical, _b = _a.className, className = _b === void 0 ? '' : _b, props = __rest(_a, ["horizontal", "vertical", "className"]);
    if (horizontal === 'center' && vertical === 'middle') {
        throw new Error('"vertical" can not be specified as "middle" when "horizontal" is "center".');
    }
    var themes = useTheme();
    var classNames = theme + " " + horizontal + " " + vertical + " " + className;
    return React.createElement(Base, __assign({ className: classNames, themes: themes }, props));
}; };
export var LightBalloon = balloonFactory('light');
export var DarkBalloon = balloonFactory('dark');
var Base = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var themes = _a.themes;
    var palette = themes.palette, frame = themes.frame, size = themes.size;
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      position: relative;\n      display: inline-block;\n      font-size: ", ";\n      border-radius: 4px;\n      box-shadow: 0 2px 8px 0 rgba(51, 51, 51, 0.35);\n      white-space: nowrap;\n\n      &::before,\n      &::after {\n        display: block;\n        position: absolute;\n        border-style: ", ";\n        content: '';\n      }\n\n      &.light {\n        background-color: #fff;\n        color: ", ";\n      }\n      &.dark {\n        background-color: ", ";\n        color: #fff;\n      }\n\n      &.light.top {\n        &::before {\n          border-color: transparent transparent ", ";\n        }\n        &::after {\n          border-color: transparent transparent #fff;\n        }\n      }\n      &.light.bottom {\n        &::before {\n          border-color: ", " transparent transparent;\n        }\n        &::after {\n          border-color: #fff transparent transparent;\n        }\n      }\n\n      &.dark.top {\n        &::before,\n        &::after {\n          border-color: transparent transparent ", ";\n        }\n      }\n      &.dark.bottom {\n        &::before,\n        &::after {\n          border-color: ", " transparent transparent;\n        }\n      }\n\n      &.top {\n        &::before,\n        &::after {\n          border-width: 0 5px 5px;\n        }\n        &::before {\n          top: -5px;\n        }\n        &::after {\n          top: -4px;\n        }\n      }\n      &.bottom {\n        &::before,\n        &::after {\n          border-width: 5px 5px 0;\n        }\n        &::before {\n          bottom: -5px;\n        }\n        &::after {\n          bottom: -4px;\n        }\n      }\n\n      &.right {\n        &::before,\n        &::after {\n          right: 24px;\n        }\n      }\n      &.center {\n        &::before,\n        &::after {\n          left: 50%;\n          transform: translateX(-5px);\n        }\n      }\n      &.left {\n        &::before,\n        &::after {\n          left: 24px;\n        }\n      }\n\n      &.middle {\n        &::before,\n        &::after {\n          top: 50%;\n          transform: translateY(-5px);\n        }\n        &.left {\n          &::before,\n          &::after {\n            border-width: 5px 5px 5px 0;\n          }\n          &::before {\n            left: -5px;\n          }\n          &::after {\n            left: -4px;\n          }\n          &.light {\n            &::before {\n              border-color: transparent ", " transparent transparent;\n            }\n            &::after {\n              border-color: transparent #fff transparent transparent;\n            }\n          }\n          &.dark {\n            &::before,\n            &::after {\n              border-color: transparent ", " transparent transparent;\n            }\n          }\n        }\n        &.right {\n          &::before,\n          &::after {\n            border-width: 5px 0 5px 5px;\n          }\n          &::before {\n            right: -5px;\n          }\n          &::after {\n            right: -4px;\n          }\n          &.light {\n            &::before {\n              border-color: transparent transparent transparent ", ";\n            }\n            &::after {\n              border-color: transparent transparent transparent #fff;\n            }\n          }\n          &.dark {\n            &::before,\n            &::after {\n              border-color: transparent transparent transparent ", ";\n            }\n          }\n        }\n      }\n    "], ["\n      position: relative;\n      display: inline-block;\n      font-size: ", ";\n      border-radius: 4px;\n      box-shadow: 0 2px 8px 0 rgba(51, 51, 51, 0.35);\n      white-space: nowrap;\n\n      &::before,\n      &::after {\n        display: block;\n        position: absolute;\n        border-style: ", ";\n        content: '';\n      }\n\n      &.light {\n        background-color: #fff;\n        color: ", ";\n      }\n      &.dark {\n        background-color: ", ";\n        color: #fff;\n      }\n\n      &.light.top {\n        &::before {\n          border-color: transparent transparent ", ";\n        }\n        &::after {\n          border-color: transparent transparent #fff;\n        }\n      }\n      &.light.bottom {\n        &::before {\n          border-color: ", " transparent transparent;\n        }\n        &::after {\n          border-color: #fff transparent transparent;\n        }\n      }\n\n      &.dark.top {\n        &::before,\n        &::after {\n          border-color: transparent transparent ", ";\n        }\n      }\n      &.dark.bottom {\n        &::before,\n        &::after {\n          border-color: ", " transparent transparent;\n        }\n      }\n\n      &.top {\n        &::before,\n        &::after {\n          border-width: 0 5px 5px;\n        }\n        &::before {\n          top: -5px;\n        }\n        &::after {\n          top: -4px;\n        }\n      }\n      &.bottom {\n        &::before,\n        &::after {\n          border-width: 5px 5px 0;\n        }\n        &::before {\n          bottom: -5px;\n        }\n        &::after {\n          bottom: -4px;\n        }\n      }\n\n      &.right {\n        &::before,\n        &::after {\n          right: 24px;\n        }\n      }\n      &.center {\n        &::before,\n        &::after {\n          left: 50%;\n          transform: translateX(-5px);\n        }\n      }\n      &.left {\n        &::before,\n        &::after {\n          left: 24px;\n        }\n      }\n\n      &.middle {\n        &::before,\n        &::after {\n          top: 50%;\n          transform: translateY(-5px);\n        }\n        &.left {\n          &::before,\n          &::after {\n            border-width: 5px 5px 5px 0;\n          }\n          &::before {\n            left: -5px;\n          }\n          &::after {\n            left: -4px;\n          }\n          &.light {\n            &::before {\n              border-color: transparent ", " transparent transparent;\n            }\n            &::after {\n              border-color: transparent #fff transparent transparent;\n            }\n          }\n          &.dark {\n            &::before,\n            &::after {\n              border-color: transparent ", " transparent transparent;\n            }\n          }\n        }\n        &.right {\n          &::before,\n          &::after {\n            border-width: 5px 0 5px 5px;\n          }\n          &::before {\n            right: -5px;\n          }\n          &::after {\n            right: -4px;\n          }\n          &.light {\n            &::before {\n              border-color: transparent transparent transparent ", ";\n            }\n            &::after {\n              border-color: transparent transparent transparent #fff;\n            }\n          }\n          &.dark {\n            &::before,\n            &::after {\n              border-color: transparent transparent transparent ", ";\n            }\n          }\n        }\n      }\n    "])), size.pxToRem(size.font.SHORT), frame.border.lineStyle, palette.TEXT_BLACK, palette.TEXT_BLACK, palette.BORDER, palette.BORDER, palette.TEXT_BLACK, palette.TEXT_BLACK, palette.BORDER, palette.TEXT_BLACK, palette.BORDER, palette.TEXT_BLACK);
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=Balloon.js.map