<template>
	<view class="content">
		<!--  商品推荐 -->
		<view class="guess-section">
			<view 
				v-for="(item, index) in goodsList" :key="index"
				class="guess-item"
				@click="navToDetailPage(item)"
			>
				<view class="image-wrapper">
					<image :src="item.a_image" mode="aspectFill"></image>
				</view>
				<text class="title clamp">{{item.a_title}}</text>
				<text class="price">折后价：￥{{item.priceInfo}}</text>
			</view>
			
			<view style="height: 150px;"></view>
		</view>
			
			
			<!-- 底部导航 -->
			<Tab></Tab>
		</view>
</template>

<script>
	import Tab from '@/components/tab.vue'
	export default {
		data() {
			return {
				goodsList:[
					{"a_image":"//img.alicdn.com/bao/uploaded/i1/2453169213/O1CN01BLUgFq2HvbTw2BkEt_!!0-item_pic.jpg_220x220",
						"a_title":"韩婵2支|网红cc棒水光提亮肤色保湿遮瑕持久光感气垫bb霜款化妆女",
						"priceInfo":"12.58"},
					{"a_image":"//img.alicdn.com/bao/uploaded/i1/2453169213/O1CN01BLUgFq2HvbTw2BkEt_!!0-item_pic.jpg_220x220",
						"a_title":"韩婵2支|网红cc棒水光提亮肤色保湿遮瑕持久光感气垫bb霜款化妆女",
						"priceInfo":"12.58"},
					{"a_image":"//img.alicdn.com/bao/uploaded/i1/2453169213/O1CN01BLUgFq2HvbTw2BkEt_!!0-item_pic.jpg_220x220",
						"a_title":"韩婵2支|网红cc棒水光提亮肤色保湿遮瑕持久光感气垫bb霜款化妆女",
						"priceInfo":"12.58"},
					{"a_image":"//img.alicdn.com/bao/uploaded/i1/2453169213/O1CN01BLUgFq2HvbTw2BkEt_!!0-item_pic.jpg_220x220",
						"a_title":"韩婵2支|网红cc棒水光提亮肤色保湿遮瑕持久光感气垫bb霜款化妆女",
						"priceInfo":"12.58"},
					{"a_image":"//img.alicdn.com/bao/uploaded/i1/2453169213/O1CN01BLUgFq2HvbTw2BkEt_!!0-item_pic.jpg_220x220",
						"a_title":"韩婵2支|网红cc棒水光提亮肤色保湿遮瑕持久光感气垫bb霜款化妆女",
						"priceInfo":"12.58"},
					{"a_image":"//img.alicdn.com/bao/uploaded/i1/2453169213/O1CN01BLUgFq2HvbTw2BkEt_!!0-item_pic.jpg_220x220",
						"a_title":"韩婵2支|网红cc棒水光提亮肤色保湿遮瑕持久光感气垫bb霜款化妆女",
						"priceInfo":"12.58"},
					{"a_image":"//img.alicdn.com/bao/uploaded/i1/2453169213/O1CN01BLUgFq2HvbTw2BkEt_!!0-item_pic.jpg_220x220",
						"a_title":"韩婵2支|网红cc棒水光提亮肤色保湿遮瑕持久光感气垫bb霜款化妆女",
						"priceInfo":"12.58"},
					{"a_image":"//img.alicdn.com/bao/uploaded/i1/2453169213/O1CN01BLUgFq2HvbTw2BkEt_!!0-item_pic.jpg_220x220",
						"a_title":"韩婵2支|网红cc棒水光提亮肤色保湿遮瑕持久光感气垫bb霜款化妆女",
						"priceInfo":"12.58"},
				],
			}
		},
		onLoad() {
			let list;
			/*
			uni.request({//加载商品
				url: this.basePath+'/a/show.html',
				method: 'GET',
				success: res => {//请求成回调函数
					list = res.data;
					console.log(list)
					//获取商品信息
					list.forEach(item=>{
							this.goodsList.push(item);  //pid为父级id, 没有pid或者pid=0是一级分类
					}) 
				},
			});*/
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
	/* 猜你喜欢 */
	.guess-section{
		display:flex;
		flex-wrap:wrap;
		padding: 0 30upx;
		background: #fff;
		.guess-item{
			display:flex;
			flex-direction: column;
			width: 48%;
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
			font-size: $font-lg;
			color: $uni-color-primary;
			line-height: 1;
		}
	}
</style>
