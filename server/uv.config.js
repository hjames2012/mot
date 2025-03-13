self.__uv$config = {
  prefix: '/proxy/',
  bare: 'https://ultraviolet-node.tomp.app/', // Default Ultraviolet bare server
  encodeUrl: Ultraviolet.codec.base64.encode, // Use base64 encoding for simplicity
  decodeUrl: Ultraviolet.codec.base64.decode, // Use base64 decoding
  handler: 'uv.handler.js',
  bundle: 'uv.bundle.js',
  config: 'uv.config.js',
  sw: 'uv.sw.js',
};
