import React from "react";

export default function SeeProps({ data }) {
    return <div>{JSON.stringify(data, null, 4)}</div>;
}
