import React from "react";
import Button from "./Button";

export default function Main() {
  return (
    <main>
      <Button label={"Primary"} type={"Primary"} />
      <Button label={"Secondary"} type={"Secondary"} />
      <Button label={"Success"} type={"Success"} />
      <Button label={"Danger"} type={"Danger"} />
      <Button label={"Warning"} type={"Warning"} />
      <Button label={"Info"} type={"Info"} />
      <Button label={"Light"} type={"Light"} />
      <Button label={"Dark"} type={"Dark"} />
      <Button label={"Link"} type={"Link"} />
      <Button label={"Default"} type={""} />
      <Button label={"Disabled"} type={""} disabled={true} />
      <Button
        label={"Primary Full Width"}
        type={"Primary"}
        fullWidth={true}
        disabled={true}
        // className={"bg-black"}
      />
    </main>
  );
}
