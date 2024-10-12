// import { getLogOut } from "@/actions/login";
import SignButton from "./signButton";

export default function LogOut() {
  return (
    <form
    // action={getLogOut}
    >
      <SignButton type="submit">Log Out</SignButton>
    </form>
  );
}
