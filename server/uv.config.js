self.__uv$config = {
    prefix: '/',
  bare: 'https://ultraviolet-node.tomp.app/', // Default Ultraviolet bare server
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
    handler: 'uv.handler.js',
    bundle: 'uv.bundle.js',
    config: 'uv.config.js',
    sw: 'uv.sw.js',
};
