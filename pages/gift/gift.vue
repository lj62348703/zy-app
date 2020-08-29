<template>
	<view class="container">
		<!-- 头部轮播 -->
		<view class="carousel-section">
			<!-- 标题栏和状态栏占位符 -->
			<view class="titleNview-placing"></view>
			<!-- 背景色区域 -->
			<view class="titleNview-background" :style="{backgroundColor:titleNViewBackground}"></view>
			<swiper class="carousel" circular @change="swiperChange">
				<swiper-item v-for="(item, index) in carouselList" :key="index" class="carousel-item" @click="navToDetailPage({title: '轮播广告'})">
					<image :src="item.src" />
				</swiper-item>
			</swiper>
			<!-- 自定义swiper指示器 -->
			<view class="swiper-dots">
				<text class="num">{{swiperCurrent+1}}</text>
				<text class="sign">/</text>
				<text class="num">{{swiperLength}}</text>
			</view>
		</view>
		
		<view style="height: 30px;"></view>
		
		<!-- 抽奖 -->
		<view class="pt-bar">
			<text class="pt-title">积分抽奖</text>  
			<text class="pt-description">每周都有免费礼品</text>  
		</view>
		<view class="content">
		    <LotteryDraw @get_winingIndex='get_winingIndex'  @luck_draw_finish='luck_draw_finish'></LotteryDraw>
		</view>
		
		<view style="height: 30px;"></view>

		<!-- 拼团 -->
		<view>
			<view class="pt-bar">
				<text class="pt-title">超值拼团</text>  
				<text class="pt-description">中奖有惊喜/未中奖也能领现金</text>  
			</view>
			<view class="pt-bar2">
				<text>距离结束时间 &nbsp;</text>  
				<view class="pt-hour pt-time">12</view>
				<view class="pt-mao"> : </view>
				<view class="pt-min pt-time">21</view>
				<view class="pt-mao"> : </view>
				<view class="pt-sec pt-time">32</view>
				
				<view class="pt-share-msg">
					待分享，差1人
				</view>
			</view>
			<!-- 进度条 -->
			<view class="padding bg-white">
				<view class="cu-progress round sm striped" :class="active?'active':''">
					<view class="bg-red" :style="[{ width:loading?'60%':''}]"></view>
				</view>
			</view>
			<view class="pt-bar3">
				<view class="pt-goods-image">
					<image src="../../static/temp/c4.png"></image>
				</view>
				<view class="pt-goods-msg">
					LADY家●通勤基础款TH上班族秋冬打底衫薄多色高领长袖羊毛针织衫
					<view class="pt-goods-description">
						原价:280元  拼团积分:140积分
					</view>
				</view>
			</view>
			<view class="share-btn">
				<button class="cu-btn round  bg-red">邀 请 好 友 拼 团</button>
			</view>
		</view>

		<view style="height: 150px;"></view>
		
		

		<!-- 底部导航 -->
		<Tab></Tab>
	</view>
</template>

<script>
	//导入底部导航组件
	import Tab from '@/components/tab.vue'
	import LotteryDraw from '../../components/SJ-LotteryDraw/SJ-LotteryDraw.vue';
	export default {

		data() {
			return {
				titleNViewBackground: '',
				swiperCurrent: 0,
				swiperLength: 0,
				carouselList: [],
				goodsList: [],
				lottery_draw_param:{
				    startIndex: 0, //开始抽奖位置，从0开始
				    totalCount: 4, //一共要转的圈数
				    winingIndex: 4, //中奖的位置，从0开始
				    speed: 50 //抽奖动画的速度 [数字越大越慢,默认100]
				},
				loading: true,
			};
		},

		onLoad() {
			this.loadData();
			uni.getSystemInfo({
				success:res=>{
					this.height = res.screenHeight;
				}
			})
		},
		methods: {
			/**
			 * 请求静态数据只是为了代码不那么乱
			 * 分次请求未作整合
			 */
			async loadData() {
				let carouselList = await this.$api.json('carouselList');
				this.titleNViewBackground = carouselList[0].background;
				this.swiperLength = carouselList.length;
				this.carouselList = carouselList;
				
				let goodsList = await this.$api.json('goodsList');
				this.goodsList = goodsList || [];
			},
			
			// 修改获奖位置（可以在这里获取后台的数据
			get_winingIndex(callback){
			    this.lottery_draw_param.winingIndex=7;
			    //props修改在小程序和APP端不成功，所以在这里使用回调函数传参，
			    callback(this.lottery_draw_param);
			},
			// 抽奖完成
			luck_draw_finish(param){
				
			    console.log(param)
			    // console.log(`抽到第${param+1}个方格的奖品`)
			}
			
		},
		//导入插件组件
		components:{
		    Tab,LotteryDraw
		},

		
	}
</script>

<style lang="scss">
	/* #ifdef MP */
	.mp-search-box{
		position:absolute;
		left: 0;
		top: 30upx;
		z-index: 9999;
		width: 100%;
		padding: 0 80upx;
		.ser-input{
			flex:1;
			height: 56upx;
			line-height: 56upx;
			text-align: center;
			font-size: 28upx;
			color:$font-color-base;
			border-radius: 20px;
			background: rgba(255,255,255,.6);
		}
	}
	page{
		.cate-section{
			position:relative;
			z-index:5;
			border-radius:16upx 16upx 0 0;
			margin-top:-20upx;
		}
		.carousel-section{
			padding: 0;
			.titleNview-placing {
				padding-top: 0;
				height: 0;
			}
			.carousel{
				.carousel-item{
					padding: 0;
				}
			}
			.swiper-dots{
				left:45upx;
				bottom:40upx;
			}
		}
	}
	/* #endif */
	
	
	page {
		background: #f5f5f5;
	}
	.m-t{
		margin-top: 16upx;
	}
	/* 头部 轮播图 */
	.carousel-section {
		position: relative;
		padding-top: 10px;

		.titleNview-placing {
			height: var(--status-bar-height);
			padding-top: 44px;
			box-sizing: content-box;
		}

		.titleNview-background {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 426upx;
			transition: .4s;
		}
	}
	.carousel {
		width: 100%;
		height: 350upx;

		.carousel-item {
			width: 100%;
			height: 100%;
			padding: 0 28upx;
			overflow: hidden;
		}

		image {
			width: 100%;
			height: 100%;
			border-radius: 10upx;
		}
	}
	.swiper-dots {
		display: flex;
		position: absolute;
		left: 60upx;
		bottom: 15upx;
		width: 72upx;
		height: 36upx;
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABkCAYAAADDhn8LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk4MzlBNjE0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk4MzlBNjA0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0E3RUNERkE0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0E3RUNERkI0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Gh5BPAAACTUlEQVR42uzcQW7jQAwFUdN306l1uWwNww5kqdsmm6/2MwtVCp8CosQtP9vg/2+/gY+DRAMBgqnjIp2PaCxCLLldpPARRIiFj1yBbMV+cHZh9PURRLQNhY8kgWyL/WDtwujjI8hoE8rKLqb5CDJaRMJHokC6yKgSCR9JAukmokIknCQJpLOIrJFwMsBJELFcKHwM9BFkLBMKFxNcBCHlQ+FhoocgpVwwnv0Xn30QBJGMC0QcaBVJiAMiec/dcwKuL4j1QMsVCXFAJE4s4NQA3K/8Y6DzO4g40P7UcmIBJxbEesCKWBDg8wWxHrAiFgT4fEGsB/CwIhYE+AeBAAdPLOcV8HRmWRDAiQVcO7GcV8CLM8uCAE4sQCDAlHcQ7x+ABQEEAggEEAggEEAggEAAgQACASAQQCCAQACBAAIBBAIIBBAIIBBAIABe4e9iAe/xd7EAJxYgEGDeO4j3EODp/cOCAE4sYMyJ5cwCHs4rCwI4sYBxJ5YzC84rCwKcXxArAuthQYDzC2JF0H49LAhwYUGsCFqvx5EF2T07dMaJBetx4cRyaqFtHJ8EIhK0i8OJBQxcECuCVutxJhCRoE0cZwMRyRcFefa/ffZBVPogePihhyCnbBhcfMFFEFM+DD4m+ghSlgmDkwlOgpAl4+BkkJMgZdk4+EgaSCcpVX7bmY9kgXQQU+1TgE0c+QJZUUz1b2T4SBbIKmJW+3iMj2SBVBWz+leVfCQLpIqYbp8b85EskIxyfIOfK5Sf+wiCRJEsllQ+oqEkQfBxmD8BBgA5hVjXyrBNUQAAAABJRU5ErkJggg==);
		background-size: 100% 100%;

		.num {
			width: 36upx;
			height: 36upx;
			border-radius: 50px;
			font-size: 24upx;
			color: #fff;
			text-align: center;
			line-height: 36upx;
		}

		.sign {
			position: absolute;
			top: 0;
			left: 50%;
			line-height: 36upx;
			font-size: 12upx;
			color: #fff;
			transform: translateX(-50%);
		}
	}
	
	/* ==================
	         进度条
	 ==================== */
	
	.cu-progress {
		overflow: hidden;
		height: 28upx;
		background-color: #ebeef5;
		display: inline-flex;
		align-items: center;
		width: 100%;
	}
	
	.cu-progress+view,
	.cu-progress+text {
		line-height: 1;
	}
	
	.cu-progress.xs {
		height: 10upx;
	}
	
	.cu-progress.sm {
		height: 20upx;
	}
	
	.cu-progress view {
		width: 0;
		height: 100%;
		align-items: center;
		display: flex;
		justify-items: flex-end;
		justify-content: space-around;
		font-size: 20upx;
		color: #ffffff;
		transition: width 0.6s ease;
	}
	
	.cu-progress text {
		align-items: center;
		display: flex;
		font-size: 20upx;
		color: #333333;
		text-indent: 10upx;
	}
	
	.cu-progress.text-progress {
		padding-right: 60upx;
	}
	
	.cu-progress.striped view {
		background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
		background-size: 72upx 72upx;
	}
	
	.cu-progress.active view {
		animation: progress-stripes 2s linear infinite;
	}
	
	.bg-white {
		background-color: #ffffff;
		color: #666666;
	}
	.bg-red {
		background-color: #e54d42;
		color: #ffffff;
	}
	
	.round {
		border-radius: 5000upx;
	}
	
	.padding{
		padding: 0px 20px;
	}
	
	@keyframes progress-stripes {
		from {
			background-position: 72upx 0;
		}
	
		to {
			background-position: 0 0;
		}
	}
	
	/* ==================
	         进度条
	 ==================== */
	 .pt-bar{
		 font-size: 16px;
		 padding-left: 20px;
		 border-bottom: 1px solid #d8dad3;
		 padding: 10px;
		 margin-bottom: 10px;
		 .pt-title{
			 font-size: 18px;
			 font-weight: 900;
		 }
		 .pt-description{
			 font-size: 16px;
			 float:right;
			 padding-right: 20px;
		 }
	 }
	 .pt-bar2{
		 display: flex;
		 flex: auto;
		 font-size: 12px;
		 padding: 10px 20px;
		 text{
			 font-size: 16px;
			 line-height: 20px;
			 margin-right: 8px;
		 }
		 .pt-time{
			 border: 1px solid red;
			 border-radius: 5px;
			 width: 20px;
			 height: 20px;
			 line-height: 18px;
			 text-align: center;
			 margin: 0px 3px;
			 color:red;
		 }
		 .pt-mao{
			 color: red;
		 }
		 .pt-share-msg{
			 color: red;
			 font-size: 16px;
			 margin-left: auto;
			 margin-right: 20px;
			 line-height: 20px;
		 }
	 }
	 
	 .pt-bar3{
		 margin: 0px 20px;
		 display: flex;
		 flex: auto;
		 .pt-goods-image{
			 image{
				 width: 100px;
				 height: 100px;
			 }
		 }
		 .pt-goods-msg{
			 margin-left: 10px;
			 font-size: 16px;
		 }
		 .pt-goods-description{
			 font-size: 14px;
			 color: red;
			 padding-left: 10px;
			 padding-top: 10px;
		 }
	 }
	 
	 /*按钮*/
	 .share-btn{
		 margin: 20px;
	 }
</style>
