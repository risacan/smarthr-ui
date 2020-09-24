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
import { StatusLabel as StatusLabelComponent } from '../StatusLabel/StatusLabel';
import { AppNaviButton } from './AppNaviButton';
import { AppNaviAnchor } from './AppNaviAnchor';
import { AppNaviDropdown } from './AppNaviDropdown';
import { AppNaviCustomTag } from './AppNaviCustomTag';
export var AppNavi = function (_a) {
    var label = _a.label, buttons = _a.buttons, isCurrentUnclickable = _a.isCurrentUnclickable, _b = _a.children, children = _b === void 0 ? null : _b;
    var theme = useTheme();
    return (React.createElement(Wrapper, { themes: theme },
        label && React.createElement(StatusLabel, { themes: theme }, label),
        buttons && (React.createElement(Buttons, { themes: theme }, buttons.map(function (button, i) {
            var isUnclickable = button.current && isCurrentUnclickable;
            if ('href' in button) {
                return (React.createElement("li", { key: i },
                    React.createElement(AppNaviAnchor, { href: button.href, icon: button.icon, current: button.current, isUnclickable: isUnclickable }, button.children)));
            }
            if ('dropdownContent' in button) {
                return (React.createElement("li", { key: i },
                    React.createElement(AppNaviDropdown, { dropdownContent: button.dropdownContent, icon: button.icon, current: button.current, isUnclickable: isUnclickable }, button.children)));
            }
            if ('tag' in button) {
                var tag = button.tag, icon = button.icon, current = button.current, buttonChildren = button.children, props = __rest(button, ["tag", "icon", "current", "children"]);
                return (React.createElement("li", { key: i },
                    React.createElement(AppNaviCustomTag, __assign({ tag: tag, icon: icon, current: current, isUnclickable: isUnclickable }, props), buttonChildren)));
            }
            return (React.createElement("li", { key: i },
                React.createElement(AppNaviButton, { icon: button.icon, current: button.current, onClick: button.onClick, isUnclickable: isUnclickable }, button.children)));
        }))),
        children));
};
var Wrapper = styled.nav(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var themes = _a.themes;
    var pxToRem = themes.size.pxToRem;
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      display: flex;\n      align-items: center;\n      width: 100%;\n      height: 40px;\n      padding: 0 ", ";\n      background-color: #fff;\n      box-sizing: border-box;\n      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);\n    "], ["\n      display: flex;\n      align-items: center;\n      width: 100%;\n      height: 40px;\n      padding: 0 ", ";\n      background-color: #fff;\n      box-sizing: border-box;\n      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);\n    "])), pxToRem(20));
});
var StatusLabel = styled(StatusLabelComponent)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var themes = _a.themes;
    var _b = themes.size, pxToRem = _b.pxToRem, space = _b.space;
    return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      margin-right: ", ";\n    "], ["\n      margin-right: ", ";\n    "])), pxToRem(space.XS));
});
var Buttons = styled.ul(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", "\n"], ["\n  ",
    "\n"])), function (_a) {
    var themes = _a.themes;
    var _b = themes.size, pxToRem = _b.pxToRem, space = _b.space;
    return css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n      display: flex;\n      align-items: center;\n      margin: 0;\n      padding: 0;\n\n      > li {\n        list-style: none;\n\n        &:not(:first-child) {\n          margin-left: ", ";\n        }\n      }\n    "], ["\n      display: flex;\n      align-items: center;\n      margin: 0;\n      padding: 0;\n\n      > li {\n        list-style: none;\n\n        &:not(:first-child) {\n          margin-left: ", ";\n        }\n      }\n    "])), pxToRem(space.XS));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=AppNavi.js.map