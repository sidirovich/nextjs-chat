import Layout from '../components/Layout'

const SettingsPage = () => (
    <Layout title="Settings | Next.js + TypeScript Example">
        <h1>Settings</h1>
        <form>
            <div className="mb-3">
                <label className="form-label">Username</label>
                <input type="email" className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Room</label>
                <input type="email" className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Encrypt method</label>
                <select className="form-select" defaultValue={ 'rsa' }>
                    <option selected value="rsa">CrypticoRSA</option>
                </select>
            </div>
        </form>
    </Layout>
)

export default SettingsPage
