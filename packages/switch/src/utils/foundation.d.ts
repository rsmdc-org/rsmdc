/**
 * @license
 * Copyright 2018 Google Inc.
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
import { RSFoundation } from '@rsmdc/base/foundation';
import { RSSwitchAdapter } from './adapter';
export declare class RSSwitchFoundation extends RSFoundation<RSSwitchAdapter> {
    /** The string constants used by the switch. */
    static readonly strings: {
        NATIVE_CONTROL_SELECTOR: string;
        RIPPLE_SURFACE_SELECTOR: string;
    };
    /** The CSS classes used by the switch. */
    static readonly cssClasses: {
        CHECKED: string;
        DISABLED: string;
    };
    /** The default Adapter for the switch. */
    static readonly defaultAdapter: RSSwitchAdapter;
    constructor(adapter?: Partial<RSSwitchAdapter>);
    /** Sets the checked state of the switch. */
    setChecked(checked: boolean): void;
    /** Sets the disabled state of the switch. */
    setDisabled(disabled: boolean): void;
    /** Handles the change event for the switch native control. */
    handleChange(evt: Event): void;
    /** Updates the styling of the switch based on its checked state. */
    private updateCheckedStyling_;
}
export default RSSwitchFoundation;
