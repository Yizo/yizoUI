import React from 'react';
import Button, { APPEARANCES, SIZES } from './index';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
export default {
    title: 'Button',
    component: Button,
    decorators: [withKnobs]
};
export var knobsBtn = function () { return (React.createElement(Button, { size: select('size', SIZES, SIZES.medium), href: text('hrefText', ''), isLink: boolean('isLink', false), loadingText: text('loadingTEXT', 'I AM LOADING'), isLoading: boolean('isLoading', false), disabled: boolean('disabled', false), appearance: select('APPEARANCES', APPEARANCES, APPEARANCES.primary) }, text('childrenText', 'Hello Storybook'))); };
export var buttons = function () { return (React.createElement(React.Fragment, null,
    React.createElement(Button, { appearance: "primary" }, "Primary"),
    React.createElement(Button, { appearance: "secondary" }, "Secondary"),
    React.createElement(Button, { appearance: "tertiary" }, "Tertiary"),
    React.createElement(Button, { appearance: "outline" }, "Outline"),
    React.createElement(Button, { appearance: "primaryOutline" }, "Outline primary"),
    React.createElement(Button, { appearance: "secondaryOutline" }, "Outline secondary"),
    React.createElement("div", { style: { background: 'grey', display: 'inline-block' } },
        React.createElement(Button, { appearance: "inversePrimary" }, "Primary inverse")),
    React.createElement("div", { style: { background: 'grey', display: 'inline-block' } },
        React.createElement(Button, { appearance: "inverseSecondary" }, "Secondary inverse")),
    React.createElement("div", { style: { background: 'grey', display: 'inline-block' } },
        React.createElement(Button, { appearance: "inverseOutline" }, "Outline inverse")))); };
export var sizes = function () { return (React.createElement(React.Fragment, null,
    React.createElement(Button, { appearance: "primary" }, "Default"),
    React.createElement(Button, { appearance: "primary", size: "small" }, "Small"))); };
export var loading = function () { return (React.createElement(React.Fragment, null,
    React.createElement(Button, { appearance: "primary", isLoading: true }, "Primary"),
    React.createElement(Button, { appearance: "secondary", isLoading: true }, "Secondary"),
    React.createElement(Button, { appearance: "tertiary", isLoading: true }, "Tertiary"),
    React.createElement(Button, { appearance: "outline", isLoading: true }, "Outline"),
    React.createElement(Button, { appearance: "outline", isLoading: true, loadingText: "Custom..." }, "Outline"))); };
export var disabled = function () { return (React.createElement(React.Fragment, null,
    React.createElement(Button, { appearance: "primary", disabled: true }, "Primary"),
    React.createElement(Button, { appearance: "secondary", disabled: true }, "Secondary"),
    React.createElement(Button, { appearance: "tertiary", disabled: true }, "Tertiary"),
    React.createElement(Button, { appearance: "outline", disabled: true }, "Outline"))); };
export var link = function () { return (React.createElement(React.Fragment, null,
    React.createElement(Button, { appearance: "primary", isLink: true, href: "/" }, "Primary"),
    React.createElement(Button, { appearance: "secondary", isLink: true, href: "/" }, "Secondary"),
    React.createElement(Button, { appearance: "tertiary", isLink: true, href: "/" }, "Tertiary"),
    React.createElement(Button, { appearance: "outline", isLink: true, href: "/" }, "Outline"))); };
