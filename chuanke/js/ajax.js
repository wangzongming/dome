function ajax(method,urll,yt,succ)
	{
		var xmlobj;
		if(window.XMLHttpRequest)
		{
			xmlobj = new XMLHttpRequest;
		}else
		{
			xmlobj = new ActiveXObject("Microsoft.XMLHTTP");
		}
		xmlobj.open(method,urll,yt,succ);
		xmlobj.send();
		xmlobj.onreadystatechange = function()
		{
			if(xmlobj.readyState==4)
			{
				if(xmlobj.status==200)
				{
					succ(xmlobj.responseText);
				}else
				{
					alert(xmlobj.status)
				}
			};
		};
	};
	//ajax('GET','a2.txt',true,f);