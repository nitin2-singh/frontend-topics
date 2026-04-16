# 🌐 Web Networking Fundamentals (Detailed Notes)

---

## 1. HTTP & HTTPS

### 🔹 HTTP (HyperText Transfer Protocol)

HTTP is an **application-layer protocol** used for communication between a client (browser) and a server.

- Stateless → Each request is independent (server doesn't remember previous requests).
- Uses **request-response model**.
- Runs on **port 80**.
- Data is sent in **plain text** (not secure).

### 🔹 HTTP Request Structure

- Method (GET, POST, PUT, DELETE)
- URL
- Headers
- Body (optional)

### 🔹 HTTP Response Structure

- Status code (200, 404, 500)
- Headers
- Body

---

### 🔹 HTTPS (Secure HTTP)

HTTPS is HTTP with **encryption using TLS (Transport Layer Security)**.

- Runs on **port 443**
- Encrypts data → prevents hacking/sniffing
- Uses **SSL/TLS certificates** for authentication

### 🔹 TLS Handshake (Simplified)

1. Client sends hello
2. Server sends certificate
3. Client verifies certificate
4. Secure key is generated
5. Encrypted communication begins

---

### 🔹 Key Differences

| Feature    | HTTP | HTTPS |
| ---------- | ---- | ----- |
| Security   | ❌   | ✅    |
| Encryption | None | TLS   |
| Port       | 80   | 443   |

---

## 2. DNS Resolution

### 🔹 What is DNS?

DNS (Domain Name System) converts human-readable domains into IP addresses.

Example:
google.com → 142.250.183.14

---

### 🔹 Steps in DNS Resolution

1. Browser cache check
2. OS cache check
3. Router cache
4. ISP DNS resolver
5. Root DNS server
6. TLD server (.com, .org)
7. Authoritative DNS server → returns IP

---

### 🔹 Types of DNS Records

- A → IPv4 address
- AAAA → IPv6
- CNAME → Alias
- MX → Mail server

---

## 3. IP Addresses & Routing

### 🔹 IP Address

Unique identifier of a device on a network.

#### Types:

- IPv4 → 32-bit (e.g., 192.168.1.1)
- IPv6 → 128-bit (e.g., 2001:db8::1)

---

### 🔹 Public vs Private IP

- Public → Internet-facing
- Private → Internal network (e.g., 192.168.x.x)

---

### 🔹 Routing

Routing is the process of forwarding packets across networks.

- Routers use **routing tables**
- Uses protocols like:
  - BGP (internet-level)
  - OSPF (internal)

---

## 4. TCP/IP Protocol Stack

### 🔹 4 Layers Model

1. Application Layer
   - HTTP, HTTPS, FTP, DNS

2. Transport Layer
   - TCP, UDP

3. Internet Layer
   - IP, ICMP

4. Network Access Layer
   - Ethernet, Wi-Fi

---

### 🔹 Data Flow

Application → Transport → Internet → Network  
(reverse on receiving)

---

## 5. TCP vs UDP

### 🔹 TCP (Transmission Control Protocol)

- Reliable ✔
- Connection-oriented
- 3-way handshake:
  1. SYN
  2. SYN-ACK
  3. ACK
- Ensures:
  - Order
  - No data loss
  - Retransmission

---

### 🔹 UDP (User Datagram Protocol)

- Connectionless
- Faster ⚡
- No guarantee of delivery
- No ordering

---

### 🔹 When to Use

- TCP → APIs, websites
- UDP → streaming, gaming, VoIP

---

## 6. Packets & Data Transfer

### 🔹 Packet

Small unit of data sent over a network.

---

### 🔹 Packet Structure

- Header → metadata (IP, port, sequence)
- Payload → actual data

---

### 🔹 Data Transfer Process

1. Data split into packets
2. Each packet travels independently
3. Packets may take different routes
4. Reassembled at destination

---

## 7. Client–Server Model

### 🔹 Client

- Initiates request
- Examples: browser, mobile app

### 🔹 Server

- Processes request and sends response

---

### 🔹 Flow

Client → HTTP Request → Server  
Server → HTTP Response → Client

---

### 🔹 Types of Servers

- Web server (NGINX)
- App server
- Database server

---

## 8. HTTP Versions

### 🔹 HTTP/1.1

- One request per connection (mostly)
- Head-of-line blocking
- No multiplexing

---

### 🔹 HTTP/2

- Multiplexing (multiple requests in one connection)
- Binary protocol
- Header compression (HPACK)
- Faster performance

---

### 🔹 HTTP/3

- Based on QUIC (uses UDP)
- Faster connection setup
- Handles packet loss better
- No head-of-line blocking

---

## 9. WebSockets

### 🔹 What is WebSocket?

Protocol for **full-duplex communication**.

- Persistent connection
- Both client and server can send data anytime

---

### 🔹 Flow

1. HTTP handshake
2. Upgrade to WebSocket
3. Persistent connection

---

### 🔹 Use Cases

- Chat apps
- Live updates
- Multiplayer games

---

## 10. Ports & Protocols

### 🔹 What is a Port?

Logical endpoint for communication.

---

### 🔹 Common Ports

| Port | Protocol |
| ---- | -------- |
| 80   | HTTP     |
| 443  | HTTPS    |
| 21   | FTP      |
| 22   | SSH      |
| 25   | SMTP     |
| 53   | DNS      |

---

## 11. CDNs (Content Delivery Networks)

### 🔹 What is CDN?

A network of distributed servers placed globally.

---

### 🔹 Purpose

- Reduce latency
- Faster loading
- Cache static assets

---

### 🔹 How it Works

User → nearest CDN server → response

---

### 🔹 Benefits

- Speed ⚡
- Reliability
- Load balancing

---

## 12. CORS (Cross-Origin Resource Sharing)

### 🔹 What is CORS?

Browser security mechanism to restrict cross-origin requests.

---

### 🔹 Origin Definition

Origin = Protocol + Domain + Port

---

### 🔹 Example

Frontend → localhost:3000  
Backend → api.example.com

---

### 🔹 Key Headers

- Access-Control-Allow-Origin
- Access-Control-Allow-Methods
- Access-Control-Allow-Headers

---

### 🔹 Preflight Request

- Uses OPTIONS method
- Checks permissions before actual request

---

## 13. Cookies & Sessions

### 🔹 Cookies

Small data stored in browser.

---

### 🔹 Uses

- Authentication
- Tracking
- Preferences

---

### 🔹 Cookie Attributes

- HttpOnly → not accessible via JS
- Secure → only HTTPS
- SameSite → CSRF protection

---

### 🔹 Sessions

Stored on server.

- Linked using session ID (stored in cookie)
- More secure than cookies

---

### 🔹 Cookies vs Sessions

| Feature  | Cookies | Sessions |
| -------- | ------- | -------- |
| Storage  | Client  | Server   |
| Security | Less    | More     |
| Size     | Limited | Large    |

---

## 🚀 Full Request Lifecycle

1. User enters URL
2. DNS resolves domain → IP
3. TCP connection established (3-way handshake)
4. TLS handshake (if HTTPS)
5. HTTP request sent
6. Server processes request
7. Response sent back
8. Browser renders page

---

## 🧠 Key Concepts to Remember

- HTTP is stateless
- HTTPS = HTTP + TLS
- DNS maps domain → IP
- TCP = reliable, UDP = fast
- HTTP/2 & HTTP/3 improve performance
- WebSockets = real-time communication
- CORS protects users
- Cookies & sessions manage authentication

---
