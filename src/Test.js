import * as React from "react";

export function Test({Prefecture}) {
    switch (Prefecture) {
        case "hk":
            return <>北海道</>
        case "th":
            return <>東北</>
        case "ke":
            return <>甲信越</>
        case "kt":
            return <>関東</>
        case "hr":
            return <>北陸</>
        case "tk":
            return <>東海</>
        case "ks":
            return <>関西</>
        default:
            return <>未設定</>
    }
}