import { LoadingOutlined } from '@ant-design/icons'
import ReactDOM from 'react-dom'
import { Suspense } from 'react'

import App from './pages/App/App'

ReactDOM.render(
    <Suspense fallback={<LoadingOutlined />}>
        <App />
    </Suspense>,
    document.getElementById('root')
)