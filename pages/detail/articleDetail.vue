<template>
	<view class="content">
		<!-- 分类推荐 -->
		<view class="f-header m-t">
			<image src="/static/h1.png"></image>
			<view class="tit-box">
				<text class="tit">文章视频</text>
				<text class="tit2">Classification recommendation</text>
			</view>
			<text class="iconfont">&#xe658;</text>
		</view>
		<!--  视频推荐 -->
		<view class="video-section">
			<view class="image-wrapper">
				<video :src="article.article_video_url" controls></video>
			</view>
			<text class="price">{{article.article_title}}</text>
		</view>
		
		<!-- 分类推荐 -->
		<view class="f-header m-t">
			<image src="/static/h1.png"></image>
			<view class="tit-box">
				<text class="tit">文章内容</text>
				<text class="tit2">Classification recommendation</text>
			</view>
			<text class="iconfont">&#xe658;</text>
		</view>
		<!--  视频推荐 -->
		<view class="video-section">
			<view class="text-wrapper">
				<text v-html="article.article_content"></text>
			</view>
		</view>
		
		<!-- 分类推荐 -->
		<view class="f-header m-t">
			<image src="/static/h1.png"></image>
			<view class="tit-box">
				<text class="tit">评论内容</text>
				<text class="tit2">Classification recommendation</text>
			</view>
			<text class="iconfont">&#xe658;</text>
		</view>
		<view class="video-section">
			<view class="text-wrapper" v-for="comment in article.commentList">
				<text v-html="comment.comment_content"></text>
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
				article: {},
			}
		},
		onLoad(options){
			let articleid = options.articleid == null ? 1 : options.articleid;
			//远程调用ajax
			uni.request({//加载文章
				url: this.basePath+'/showArticleDetail2.action?article_id='+articleid,
				method: 'GET',
				success: res => {//请求成回调函数
					this.article = res.data;
					console.log(this.article)
				},
			});
		},
		methods: {
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
			video{
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
			width: 100%;
			text-align: center;
			font-size: $font-lg;
			color: $uni-color-primary;
			line-height: 40upx;
			vertical-align: middle;
		}
	}
</style>
