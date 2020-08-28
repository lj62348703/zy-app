<template>
	<view class="content">
		<!-- 分类推荐 -->
		<view class="f-header m-t">
			<image src="/static/h1.png"></image>
			<view class="tit-box">
				<text class="tit">分类推荐</text>
				<text class="tit2">Classification recommendation</text>
			</view>
			<text class="iconfont">&#xe658;</text>
		</view>
		<!--  视频推荐 -->
		<view class="video-section">
			<view 
				v-for="(item, index) in articleList" :key="index"
				class="guess-item"
				@click="navToList(item.article_id)"
			>
				<view class="image-wrapper">
					<image :src="basePath+item.article_image_url" controls></image>
				</view>
				<text class="price">{{item.article_title}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				sizeCalcState: false,
				tabScrollTop: 0,
				currentId: 1,
				articleList: [],
			}
		},
		onLoad(options){
			let typeid = options.typeid == null ? 1 : options.typeid;
			//远程调用ajax
			let list;
			uni.request({//加载所有分类
				url: this.basePath+'/showArticlePage.action?article_type_id='+typeid,
				method: 'GET',
				success: res => {//请求成回调函数
					list = res.data.list;
					/*添加一级分类*/
					list.forEach(item=>{
						this.articleList.push(item);  
					}) 
				},
			});
		},
		methods: {
			navToList(id){
				uni.navigateTo({
					url: '/pages/detail/articleDetail?articleid='+id
				})
			}
		}
	}
</script>

<style lang='scss'>
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
			color: $font-color-light;
		}
	}
	
	/* 视频推荐 */
	.video-section{
		display:flex;
		flex-wrap:wrap;
		padding: 0 30upx;
		background: #fff;
		.guess-item{
			display:flex;
			flex-direction: column;
			width: 98%;
			padding-bottom: 40upx;
			&:nth-child(2n+1){
				margin-right: 4%;
			}
		}
		.image-wrapper{
			width: 100%;
			height: 330upx;
			border-radius: 3px;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
				opacity: 1;
			}
		}
		.title{
			font-size: $font-base;
			color: $font-color-dark;
			line-height: 40upx;
		}
		.price{
			text-align: center;
			font-size: $font-lg;
			color: $uni-color-primary;
			line-height: 40upx;
			vertical-align: middle;
		}
	}
</style>
