## Running Your App with HTTPS and HTTP

To run your app locally with either HTTPS or HTTP

### 1. Generate SSL/TLS Certificates

Create a folder called certs in the root directory

```bash
openssl req -newkey rsa:2048 -x509 -nodes -keyout certs/key.pem -out certs/cert.pem -days 365

```

### 2. Running using http-server

npm install -g http-server (if not already done)

```bash
http-server dist -S -C certs/cert.pem -K certs/key.pem -o
```
