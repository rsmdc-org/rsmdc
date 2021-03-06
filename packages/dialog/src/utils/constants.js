/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
export var cssClasses = {
    CLOSING: '-closing',
    OPEN: '-open',
    OPENING: '-opening',
    SCROLLABLE: '-scrollable',
    SCROLL_LOCK: '-scroll-lock',
    STACKED: '-stacked',
};
export var strings = {
    ACTION_ATTRIBUTE: 'data-rs-dialog-action',
    BUTTON_SELECTOR: '.button',
    CLOSED_EVENT: 'rsDialog:closed',
    CLOSE_ACTION: 'close',
    CLOSING_EVENT: 'rsDialog:closing',
    CONTAINER_SELECTOR: '.container',
    CONTENT_SELECTOR: '.content',
    DEFAULT_BUTTON_SELECTOR: '.button-default',
    DESTROY_ACTION: 'destroy',
    OPENED_EVENT: 'rsDialog:opened',
    OPENING_EVENT: 'rsDialog:opening',
    SCRIM_SELECTOR: '.scrim',
    SUPPRESS_DEFAULT_PRESS_SELECTOR: [
        'textarea',
        '.rs-menu .rs-list-item',
    ].join(', '),
    SURFACE_SELECTOR: '.surface',
};
export var numbers = {
    DIALOG_ANIMATION_CLOSE_TIME_MS: 75,
    DIALOG_ANIMATION_OPEN_TIME_MS: 150,
};
//# sourceMappingURL=constants.js.map