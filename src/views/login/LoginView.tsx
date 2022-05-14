import React from 'react'
import { Form, Input, Card, Button } from 'antd'
import { useHistory } from 'react-router-dom'

interface Props {}

const LoginView = (props: Props) => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const history = useHistory()

  const login = async () => {
    setLoading(true)
    history.push('/')
  }

  return (
    <div>
      <h1>Login</h1>
      <Card>
        <Form.Item label="Correo">
          <Input
            placeholder="Correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Contraseña">
          <Input
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>

        <Button type="primary" loading={loading} onClick={() => login()}>
          Iniciar Sesión
        </Button>
      </Card>
    </div>
  )
}

export default LoginView
