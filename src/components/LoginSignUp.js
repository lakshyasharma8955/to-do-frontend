import React, { useState } from "react";
import * as Elements from "../utils/elements";

function LoginSignUp() {
  const [signIn, toggle] = useState(true);
  return (
    <Elements.Body>
      <Elements.Container>
        <Elements.SignUpContainer signinin={signIn}>
          <Elements.Form>
            <Elements.Title>Create Account</Elements.Title>
            <Elements.Input type="text" placeholder="Name" />
            <Elements.Input type="email" placeholder="Email" />
            <Elements.Input type="password" placeholder="Password" />
            <Elements.Button>Sign Up</Elements.Button>
          </Elements.Form>
        </Elements.SignUpContainer>

        <Elements.SignInContainer signinin={signIn}>
          <Elements.Form>
            <Elements.Title>Sign in</Elements.Title>
            <Elements.Input type="email" placeholder="Email" />
            <Elements.Input type="password" placeholder="Password" />
            <Elements.Anchor href="#">Forgot your password?</Elements.Anchor>
            <Elements.Button>Sigin In</Elements.Button>
          </Elements.Form>
        </Elements.SignInContainer>

        <Elements.OverlayContainer signinin={signIn}>
          <Elements.Overlay signinin={signIn}>
            <Elements.LeftOverlayPanel signinin={signIn}>
              <Elements.Title>Welcome Back!</Elements.Title>
              <Elements.Paragraph>
                To keep connected with us please login with your personal info
              </Elements.Paragraph>
              <Elements.GhostButton onClick={() => toggle(true)}>
                Sign In
              </Elements.GhostButton>
            </Elements.LeftOverlayPanel>

            <Elements.RightOverlayPanel signinin={signIn}>
              <Elements.Title>Hello, Friend!</Elements.Title>
              <Elements.Paragraph>
                Enter Your personal details and start journey with us
              </Elements.Paragraph>
              <Elements.GhostButton onClick={() => toggle(false)}>
                Sigin Up
              </Elements.GhostButton>
            </Elements.RightOverlayPanel>
          </Elements.Overlay>
        </Elements.OverlayContainer>
      </Elements.Container>
    </Elements.Body>
  );
}

export default LoginSignUp;
