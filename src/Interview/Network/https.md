https: 全称 **http over TLS** (SSL已经被废弃了，现在使用的一般是TLS)

	1. 客户端发送clientHello 消息到服务器，包括TLS版本和可用的加密算法和压缩算法
	2. 服务端返回serverHello消息给客户端，包括服务端的TLS版本，加密和压缩算法，以及CA证书，包含公钥
	3. 客户端根据自己信任的CA列表验证服务器返回的CA证书是否可信，如果可信的话，客户端会生产一个伪随机数，并用服务器给的秘钥进行加密。
	4. 服务端利用自己的私钥进行解密上边的随机数，生成对称主密钥
	5. 客户端发送自己的一个Finished消息，并使用对称秘钥加密这次通讯的hash值
	6. 服务端生成自己的hash值，然后解密客户端发送过来的值，如果一致，则向客户端发送Finished信号,
  
至此加密通道建立，进行普通的http数据传输