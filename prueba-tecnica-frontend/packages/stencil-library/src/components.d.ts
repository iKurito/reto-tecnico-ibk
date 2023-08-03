/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { RecordType } from "./data/record.data";
export { RecordType } from "./data/record.data";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface RtCard {
        "email": string;
        "names": string;
        "surnames": string;
        "uid": string;
    }
    interface RtCardsFetched {
    }
    interface RtFooter {
    }
    interface RtHeader {
    }
    interface RtRecord {
        "dateString": string;
        "email": string;
        "names": string;
        "surnames": string;
        "type": RecordType;
    }
    interface RtSpinner {
    }
    interface RtUserForm {
        "btnName": string;
        "uid": string;
        "view": boolean;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLRtCardElement extends Components.RtCard, HTMLStencilElement {
    }
    var HTMLRtCardElement: {
        prototype: HTMLRtCardElement;
        new (): HTMLRtCardElement;
    };
    interface HTMLRtCardsFetchedElement extends Components.RtCardsFetched, HTMLStencilElement {
    }
    var HTMLRtCardsFetchedElement: {
        prototype: HTMLRtCardsFetchedElement;
        new (): HTMLRtCardsFetchedElement;
    };
    interface HTMLRtFooterElement extends Components.RtFooter, HTMLStencilElement {
    }
    var HTMLRtFooterElement: {
        prototype: HTMLRtFooterElement;
        new (): HTMLRtFooterElement;
    };
    interface HTMLRtHeaderElement extends Components.RtHeader, HTMLStencilElement {
    }
    var HTMLRtHeaderElement: {
        prototype: HTMLRtHeaderElement;
        new (): HTMLRtHeaderElement;
    };
    interface HTMLRtRecordElement extends Components.RtRecord, HTMLStencilElement {
    }
    var HTMLRtRecordElement: {
        prototype: HTMLRtRecordElement;
        new (): HTMLRtRecordElement;
    };
    interface HTMLRtSpinnerElement extends Components.RtSpinner, HTMLStencilElement {
    }
    var HTMLRtSpinnerElement: {
        prototype: HTMLRtSpinnerElement;
        new (): HTMLRtSpinnerElement;
    };
    interface HTMLRtUserFormElement extends Components.RtUserForm, HTMLStencilElement {
    }
    var HTMLRtUserFormElement: {
        prototype: HTMLRtUserFormElement;
        new (): HTMLRtUserFormElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "rt-card": HTMLRtCardElement;
        "rt-cards-fetched": HTMLRtCardsFetchedElement;
        "rt-footer": HTMLRtFooterElement;
        "rt-header": HTMLRtHeaderElement;
        "rt-record": HTMLRtRecordElement;
        "rt-spinner": HTMLRtSpinnerElement;
        "rt-user-form": HTMLRtUserFormElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface RtCard {
        "email"?: string;
        "names"?: string;
        "surnames"?: string;
        "uid"?: string;
    }
    interface RtCardsFetched {
    }
    interface RtFooter {
    }
    interface RtHeader {
    }
    interface RtRecord {
        "dateString"?: string;
        "email"?: string;
        "names"?: string;
        "surnames"?: string;
        "type"?: RecordType;
    }
    interface RtSpinner {
    }
    interface RtUserForm {
        "btnName"?: string;
        "uid"?: string;
        "view"?: boolean;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "rt-card": RtCard;
        "rt-cards-fetched": RtCardsFetched;
        "rt-footer": RtFooter;
        "rt-header": RtHeader;
        "rt-record": RtRecord;
        "rt-spinner": RtSpinner;
        "rt-user-form": RtUserForm;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "rt-card": LocalJSX.RtCard & JSXBase.HTMLAttributes<HTMLRtCardElement>;
            "rt-cards-fetched": LocalJSX.RtCardsFetched & JSXBase.HTMLAttributes<HTMLRtCardsFetchedElement>;
            "rt-footer": LocalJSX.RtFooter & JSXBase.HTMLAttributes<HTMLRtFooterElement>;
            "rt-header": LocalJSX.RtHeader & JSXBase.HTMLAttributes<HTMLRtHeaderElement>;
            "rt-record": LocalJSX.RtRecord & JSXBase.HTMLAttributes<HTMLRtRecordElement>;
            "rt-spinner": LocalJSX.RtSpinner & JSXBase.HTMLAttributes<HTMLRtSpinnerElement>;
            "rt-user-form": LocalJSX.RtUserForm & JSXBase.HTMLAttributes<HTMLRtUserFormElement>;
        }
    }
}
