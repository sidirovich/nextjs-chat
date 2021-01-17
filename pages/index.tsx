import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Encrypt Chat on Next.js 👋</h1>
    <div className="mt-3 mb-3">
      <div className="alert alert-danger" role="alert">
        <h3>Attention</h3>
        <p>Never use this chat if there is no HTTPS connection icon on the tab. Your communication could be compromised.</p>
      </div>
    </div>
    <div className="mb-3">
        <h3>Short description</h3>
        <p>Our server does not record user data, as well as message history. The server does not use the database, sessions and proxy cache. But your messages can be saved or processed by the provider or hosting middleware. The salt of your hash is used as the name of the room. Nobody knows the salt for decoding, so that you can communicate with your interlocutor, tell him the salt in advance. In any secure way. This chat allows you to exchange instant messages, by prior agreement on the terms of communication.</p>
    </div>
    <div className="mb-3">
        <h3>E2EE RSA</h3>
        <p>Method where only the communicating users can read the messages. In principle, it prevents potential eavesdroppers – including telecom providers, Internet providers, and even the provider of the communication service – from being able to access the cryptographic keys needed to decrypt the conversation.</p>
    </div>
  </Layout>
)

export default IndexPage
