<template>
	<view class="container"> 
		<!-- 分类推荐 -->
		<view class="f-header m-t">
			<image src="/static/h1.png"></image>
			<view class="tit-box">
				<text class="tit">Java视频</text>
				<text class="tit2">Java video tutorial</text>
			</view>
			<text class="iconfont icon-JAVA" @click="navToType(1)">&#xe658;</text>
		</view>
		<!--  视频推荐 -->
		<scroll-view class="floor-list" scroll-x>
			<view class="scoll-wrapper">
				<view class="floor-item">
					<view class="image-wrapper">
						<video src="article_video_url" controls></video>
					</view>
					<text class="price">Java示例视频demo标题11111111</text>
				</view>
			</view>
		</scroll-view>
		
		<!-- 分类推荐 -->
		<view class="f-header m-t">
			<image src="/static/h1.png"></image>
			<view class="tit-box">
				<text class="tit">云计算</text>
				<text class="tit2">Cloud computing material</text>
			</view>
			<text class="iconfont icon-yunjisuan" @click="navToType(3)">&#xe658;</text>
		</view>
		<!--  视频推荐 -->
		<scroll-view class="floor-list" scroll-x>
			<view class="scoll-wrapper">
				<view class="floor-item">
					<view class="image-wrapper">
						<video src="article_video_url" controls></video>
					</view>
					<text class="price">Java示例视频demo标题11111111</text>
				</view>
			</view>
		</scroll-view>
		
		<!-- 分类推荐 -->
		<view class="f-header m-t">
			<image src="/static/h1.png"></image>
			<view class="tit-box">
				<text class="tit">数据库</text>
				<text class="tit2">Database video tutorial</text>
			</view>
			<text class="iconfont icon-suyaniconchanpinleibufenzuodaohangbufen84">&#xe658;</text>
		</view>
		<!--  视频推荐 -->
		<scroll-view class="floor-list" scroll-x>
			<view class="scoll-wrapper">
				<view class="floor-item">
					<view class="image-wrapper">
						<video src="article_video_url" controls></video>
					</view>
					<text class="price">Java示例视频demo标题11111111</text>
				</view>
			</view>
		</scroll-view>
		
		<!-- 底部导航 -->
		<view style="height: 110px;"></view>
		<Tab></Tab>
	</view>
</template>

<script>
	//导入底部导航组件
	import Tab from '@/components/tab.vue'
	
	export default {
		data() {
			return {
				articleList1:[],
				articleList2:[],
				articleList3:[],
			}
		},
		onLoad() {
		},
		methods: {
		},
		//导入插件组件
		components:{
		    Tab
		},
	}
</script>

<style lang="scss">
	@import "/static/css/iconfont.css";
	.m-t{
		margin-top: 16upx;
	}
	.f-header{
		display:flex;
		align-items:center;
		height: 140upx;
		padding: 6upx 30upx 8upx;
		background: #fff;
		image{
			flex-shrink: 0;
			width: 80upx;
			height: 80upx;
			margin-right: 20upx;
		}
		.tit-box{
			flex: 1;
			display: flex;
			flex-direction: column;
		}
		.tit{
			font-size: $font-lg +2upx;
			color: #font-color-dark;
			line-height: 1.3;
		}
		.tit2{
			font-size: $font-sm;
			color: $font-color-light;
		}
		.iconfont{
			font-size: $font-lg +20upx;
			color: #BD2C00;
		}
	}
	
	/*视频推荐*/
	.floor-list{
		white-space: nowrap;
	}
	.scoll-wrapper{
		display:flex;
		align-items: flex-start;
	}
	.floor-item{
		width: 100%;
		height: 450upx;
		margin-right: 0upx;
		font-size: $font-sm+2upx;
		color: $font-color-dark;
		line-height: 1.8;
		word-wrap:break-word;
		overflow-wrap:break-word;
		video{
			width: 100%;
			height: 350upx;
			border-radius: 6upx;
		}
		text{
			color: $uni-color-primary;
			width: 100%;
			height: 100upx;
			font-size: 18px;
			justify-content: center;
			align-items: center;
			line-height: 100upx;
		}
	}
</style>
