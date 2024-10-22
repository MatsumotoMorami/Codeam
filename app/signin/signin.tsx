import Link from "next/link";
import { Stack, Panel, Form, Divider, Button, IconButton } from "rsuite";
import GithubIcon from '@rsuite/icons/legacy/Github';
import GoogleIcon from '@rsuite/icons/legacy/Google';
import WechatIcon from '@rsuite/icons/legacy/Wechat';
import QrcodeIcon from '@rsuite/icons/Qrcode';

export function SignInComponent() {
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

            <Panel bordered style={{ background: '#fff', width: 400, height: 360 }} header={<div className="text-3xl font-bold">Sign In</div>}>
                <p style={{ marginBottom: 20 }}>
                    <span className="text-muted pr-5">New Here? </span>{' '}
                    <Link href="/signup" className="text-gray-400"> Create an Account</Link>
                </p>

                <Form fluid>
                    <Form.Group>
                        <Form.ControlLabel>Username or email address</Form.ControlLabel>
                        <Form.Control name="name" />
                    </Form.Group>
                    <Form.Group>
                        <Form.ControlLabel>
                            <span>Password</span>
                            <a style={{ float: 'right' }} className="text-gray-400">Forgot password?</a>
                        </Form.ControlLabel>
                        <Form.Control name="name" type="password" />
                    </Form.Group>
                    <Form.Group>
                        <Stack spacing={6} divider={<Divider vertical />}>
                            <Button appearance="primary">Sign in</Button>
                            <IconButton icon={<WechatIcon />} appearance="subtle" />
                            <IconButton icon={<GithubIcon />} appearance="subtle" />
                            <IconButton icon={<GoogleIcon />} appearance="subtle" />
                            <IconButton icon={<QrcodeIcon />} appearance="subtle" />
                        </Stack>
                    </Form.Group>
                </Form>
            </Panel>
        </Stack>
    );
};