  

	//启动RPC服务允许调aardio/electron互调函数,创建BrowserWindow主窗口
	const aardio = require('aardio');
	aardio.ready( win=> { 
		//if( !aardio.studioInvoke  ){
			win.removeMenu()
		//}
	})
	
	//管理electron进程的生命周期
	const app = require('electron').app;
	
	//在所有窗口关闭时退出electron进程
	app.on('window-all-closed', () => app.quit() );