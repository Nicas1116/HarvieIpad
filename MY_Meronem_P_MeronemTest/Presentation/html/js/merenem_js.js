var currentPageNo;
var currentStage;
function callPageAnimation(pageNo)
{
	currentPageNo=pageNo;
	if(pageNo==1)
	{
		setTimeout(function(){$(".landing_title").fadeIn("slow");},1000);
		setTimeout(function(){$(".navigation_all").fadeIn("slow");},2000);
	}else if(pageNo==2)
	{
		setTimeout(function(){$(".slideTitlePageBoard1").fadeIn("slow");},1000);
		setTimeout(function(){$(".slideDescPageBoard1").fadeIn("slow");},2000);
		setTimeout(function(){$(".slideGraphPageBoard1").fadeIn("slow");},3000);
		setTimeout(function(){$(".slideGraphRefPageBoard1").fadeIn("slow");},4000);
	}else if(pageNo==3)
	{
		setTimeout(function(){$(".slideTitlePageBoard2").fadeIn("slow");},1000);
		setTimeout(function(){$(".slideDescPageBoard2").fadeIn("slow");},2000);
		setTimeout(function(){$(".slideGraphPageBoard2").fadeIn("slow");},3000);
		setTimeout(function(){$(".slideGraphRefPageBoard2").fadeIn("slow");},4000);
	}else if(pageNo==4)
	{
		setTimeout(function(){$(".slideTitlePageBoard3").fadeIn("slow");},1000);
		setTimeout(function(){$(".slideGraphPageBoard3").fadeIn("slow");},2000);
		setTimeout(function(){$(".slideGraphRefPageBoard3").fadeIn("slow");},3000);
	}else if(pageNo==5)
	{
		setTimeout(function(){$(".landing_title2").fadeIn("slow");},1000);
		setTimeout(function(){$(".navigation_all").fadeIn("slow");},2000);
	}
	else if(pageNo==6)
	{
		setTimeout(function(){$(".slideTitlePageCompare1").fadeIn("slow");},1000);
		setTimeout(function(){$(".slideGraphPageCompare1").fadeIn("slow");},2000);
		setTimeout(function(){$(".slideGraphRefPageCompare1").fadeIn("slow");},3000);
	}else if(pageNo==7)
	{
		setTimeout(function(){$(".slideTitlePageCompare2").fadeIn("slow");},1000);
		setTimeout(function(){$(".slideDescPageCompare2").fadeIn("slow");},2000);
		setTimeout(function(){$(".slideGraphPageCompare2").fadeIn("slow");},3000);
		setTimeout(function(){$(".slideGraphRefPageCompare2").fadeIn("slow");},4000);
	}else if(pageNo==8)
	{
		setTimeout(function(){$(".landing_title3").fadeIn("slow");},1000);
		setTimeout(function(){$(".navigation_all").fadeIn("slow");},2000);
	}else if(pageNo==9)
	{
		setTimeout(function(){$(".slideTitlePageIndication1").fadeIn("slow");},1000);
		setTimeout(function(){$(".slideDescPageIndication1").fadeIn("slow");},2000);
		setTimeout(function(){$(".slideGraphPageIndication1").fadeIn("slow");},3000);
		setTimeout(function(){$(".slideGraphRefPageIndication1").fadeIn("slow");},4000);
	}else if(pageNo==10)
	{
		setTimeout(function(){$(".slideTitlePageIndication2").fadeIn("slow");},1000);
		setTimeout(function(){$(".slideDescPageIndication2").fadeIn("slow");},2000);
		setTimeout(function(){$(".slideGraphPageIndication2").fadeIn("slow");},3000);
		setTimeout(function(){$(".slideGraphRefPageIndication2").fadeIn("slow");},4000);
	}else if(pageNo==11)
	{
		setTimeout(function(){$(".slideTitlePageIndication3").fadeIn("slow");},1000);
		setTimeout(function(){$(".slideDescPageIndication3").fadeIn("slow");},2000);
		setTimeout(function(){$(".slideGraphPageIndication3").fadeIn("slow");},3000);
		setTimeout(function(){$(".slideGraphRefPageIndication3").fadeIn("slow");},4000);
	}else if(pageNo==12)
	{
		setTimeout(function(){$(".landing_title4").fadeIn("slow");},1000);
		setTimeout(function(){$(".navigation_all").fadeIn("slow");},2000);
	}else if(pageNo==13)
	{
		setTimeout(function(){$(".slideDescPageToreability1").fadeIn("slow");},1000);
		setTimeout(function(){$(".slideGraphRefPageToreability1").fadeIn("slow");},2000);
	}else if(pageNo==14)
	{
		setTimeout(function(){$(".slideTitlePageToreability2").fadeIn("slow");},1000);
		setTimeout(function(){$(".slideGraph1PageToreability2").fadeIn("slow");},2000);
		setTimeout(function(){$(".slideGraph2PageToreability2").fadeIn("slow");},3000);
		setTimeout(function(){$(".slideDescPageToreability2").fadeIn("slow");},4000);
		setTimeout(function(){$(".slideGraphRefPageToreability2").fadeIn("slow");},5000);
	}else if(pageNo==15)
	{
		setTimeout(function(){$(".landing_title5").fadeIn("slow");},1000);
		setTimeout(function(){$(".navigation_all").fadeIn("slow");},2000);
	}else if(pageNo==16)
	{
		setTimeout(function(){$(".slideTitlePageDosing1").fadeIn("slow");},1000);
		setTimeout(function(){$(".slideDescPageDosing1").fadeIn("slow");},2000);
		setTimeout(function(){$(".slideGraphPageDosing1").fadeIn("slow");},3000);
		setTimeout(function(){$(".slideGraphRefPageDosing1").fadeIn("slow");},4000);
	}else if(pageNo==17)
	{
		setTimeout(function(){$(".slideTitlePageDosing2").fadeIn("slow");},1000);
		setTimeout(function(){$(".slideDesc1PageDosing2").fadeIn("slow");},2000);
		setTimeout(function(){$(".slideDesc2PageDosing2").fadeIn("slow");},3000);
		setTimeout(function(){$(".slideGraphPageDosing2").fadeIn("slow");},4000);
		setTimeout(function(){$(".slideDesc3PageDosing2").fadeIn("slow");},5000);
		setTimeout(function(){$(".slideGraphRefPageDosing2").fadeIn("slow");},6000);
	}else if(pageNo==18)
	{
		setTimeout(function(){$(".slideTitlePageDosing3").fadeIn("slow");},1000);
		setTimeout(function(){$(".slideGraphPageDosing3").fadeIn("slow");},2000);
		setTimeout(function(){$(".slideGraphRefPageDosing3").fadeIn("slow");},3000);
	}else if(pageNo==19)
	{
		setTimeout(function(){$(".slideTitlePageDosing4").fadeIn("slow");},1000);
		setTimeout(function(){$(".slideDesc1PageDosing4").fadeIn("slow");},2000);
		setTimeout(function(){$(".slideGraphPageDosing4").fadeIn("slow");},3000);
		setTimeout(function(){$(".slideGraphRefPageDosing4").fadeIn("slow");},4000);
	}else if(pageNo==20)
	{
		setTimeout(function(){$(".landing_title6").fadeIn("slow");},1000);
		setTimeout(function(){$(".navigation_all").fadeIn("slow");},2000);
	}else if(pageNo==21)
	{
		currentStage=1;
		setTimeout(function(){$(".slideTitle1PageTrust1").fadeIn("slow");},1000);
		setTimeout(function(){$(".slideDesc1PageTrust1").fadeIn("slow");},2000);
		setTimeout(function(){$(".slideGraphRefPageDosing1").fadeIn("slow");},3000);
		$(".normalbg").bind("mousedown",function()
		{
			runStageAnimate(++currentStage);
		});
	}else if(pageNo==22)
	{
		setTimeout(function(){$(".landing_title7").fadeIn("slow");},1000);
		setTimeout(function(){$(".navigation_all").fadeIn("slow");},2000);
	}else if(pageNo==23)
	{
		currentStage=1;
		setTimeout(function(){$(".slideTitle1PageSummary1").fadeIn("slow");},1000);
		setTimeout(function(){$(".slideGraph1PageSummary1").fadeIn("slow");},2000);
		$(".normalbg").bind("mousedown",function()
		{
			runStageAnimate(++currentStage);
		});
	}else if(pageNo==24)
	{
		setTimeout(function(){$(".slideTitle1PageSummary2").fadeIn("slow");},1000);
		setTimeout(function(){$(".slideGraph1PageSummary2").fadeIn("slow");},2000);
		setTimeout(function(){$(".slideGraphRefPageSummary2").fadeIn("slow");},3000);
	}
	
	checkNavigateFooter();
}

function runStageAnimate(pStage)
{
	if(currentPageNo==21)
	{
		currentStage=pStage;
		if(currentStage==2)
		{
			setTimeout(function(){$(".slideTitle1PageTrust1").fadeOut("fast");},500);
			setTimeout(function(){$(".slideDesc1PageTrust1").fadeOut("fast");},1000);
			setTimeout(function(){$(".slideTitle2PageTrust1").fadeIn("slow");},1500);
			setTimeout(function(){$(".slideDesc2PageTrust1").fadeIn("slow");},2000);
		}else if(currentStage==3)
		{
			setTimeout(function(){$(".slideTitle2PageTrust1").fadeOut("fast");},500);
			setTimeout(function(){$(".slideDesc2PageTrust1").fadeOut("fast");},1000);
			setTimeout(function(){$(".slideTitle3PageTrust1").fadeIn("slow");},1500);
			setTimeout(function(){$(".slideDesc3PageTrust1").fadeIn("slow");},2000);
		}
	}else if(currentPageNo==23)
	{
		currentStage=pStage;
		if(currentStage==2)
		{
			setTimeout(function(){$(".slideTitle1PageSummary1").fadeOut("fast");},500);
			setTimeout(function(){$(".slideGraph1PageSummary1").fadeOut("fast");},1000);
			setTimeout(function(){$(".slideTitle2PageSummary1").fadeIn("slow");},1500);
			setTimeout(function(){$(".slideDesc2PageSummary1").fadeIn("slow");},2000);
			setTimeout(function(){$(".slideGraphRef2PageSummary1").fadeIn("slow");},2500);
		}
	}
}

$(document).ready(function()
{
    $("#btnHome").bind("touchstart",function()
    {
        SystemBridge.goToSlide("PageHome");
    });
                  
});

function checkNavigateFooter()
{
	switch(currentPageNo)
	{
		case 2:
		case 3:
		case 4:
			$("#btnBoard img").attr("src","../images/navigation_btnBroadSpectrumSelected.png");
		break;
		case 5:
		case 6:
		case 7:
		
			$("#btnCompare img").attr("src","../images/navigation_btnComparisonSelected.png");
		break;
		case 8:
		case 9:
		case 10:
		case 11:
			$("#btnIndicatioin img").attr("src","../images/navigation_btnIndicationsSelected.png");
		break;
		case 12:
		case 13:
		case 14:
			$("#btnTolera img").attr("src","../images/navigation_btnTolerabilitySelected.png");
		break;
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			$("#btnDosing img").attr("src","../images/navigation_btnDosingSelected.png");
		break;
		case 20:
		case 21:
			$("#btnTrust img").attr("src","../images/navigation_btnTrustSelected.png");
		break;
		case 22:
		case 23:
			$("#btnSummary img").attr("src","../images/navigation_btnSummarySelected.png");
		break;
		case 24:
			$("#btnPreseInfo img").attr("src","../images/navigation_btnPreseInfoSelected.png");
		break;
	}
}