import React from "react"
import { create } from "react-test-renderer"
import {ProfileStatus} from "./ProfileStatus"

describe("ProfileStatus Component", () => {
    test("Status from props should be in the state", () => {
        const component = create(<ProfileStatus status='Add Status' />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Add Status'");
    });
});