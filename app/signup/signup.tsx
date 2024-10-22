"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Stack, Panel, Divider, Form, InputGroup, Checkbox, Button } from "rsuite";
// import EyeIcon from '@rsuite/icons/legacy/Eye';
// import EyeSlashIcon from '@rsuite/icons/legacy/EyeSlash';

export function SignUpComponent() {
    const [visible, setVisible] = useState(false);

    return (
        <Stack
            justifyContent="center"
            alignItems="center"
            direction="column"
            style={{
                height: '100vh',
                inset: 0,
                margin: 'auto'
            }}
        >
            <Panel
                header={<div>Create an Account</div>}
                bordered
                style={{ background: '#fff', width: 400, height: 600 }}
            >
                <p>
                    <span>Already have an account?</span> <Link href="/signin" className="text-gray-400 ml-3">Sign in here</Link>
                </p>

                <Divider>OR</Divider>

                <Form fluid className="relative">
                    <Form.Group>
                        <Form.ControlLabel>Username</Form.ControlLabel>
                        <Form.Control name="name" />
                    </Form.Group>

                    <Form.Group>
                        <Form.ControlLabel>Email</Form.ControlLabel>
                        <Form.Control name="email" />
                    </Form.Group>
                    <Form.Group>
                        <Form.ControlLabel>Password</Form.ControlLabel>
                        <InputGroup inside style={{ width: '100%' }}>
                            <Form.Control
                                name="password"
                                type={visible ? 'text' : 'password'}
                                autoComplete="off"
                            />
                            <InputGroup.Button onClick={() => setVisible(!visible)}>
                                {/* {visible ? <EyeIcon /> : <EyeSlashIcon />} */}
                            </InputGroup.Button>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group>
                        <Form.ControlLabel>Confirm Password</Form.ControlLabel>
                        <Form.Control name="confirm-password" type="password" />
                    </Form.Group>

                    <Form.Group>
                        <Stack>
                            <Button appearance="primary" className="mr-3">Submit</Button>
                            <Checkbox>I Agree</Checkbox>
                            <Button appearance="link">Terms and conditions.</Button>
                        </Stack>
                    </Form.Group>
                </Form>
            </Panel>
        </Stack>
    );
};