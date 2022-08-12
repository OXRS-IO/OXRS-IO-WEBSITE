<template>
	<div class="container">
		<div class="sub-container">
        <label for="icon">Icon Name:</label><br><br>
        <input type="text" id="icon-name" name="icon" v-model="iconName"><br><br>
				<label for="selectAvatar">Upload Image:</label><br><br>
        <input id="selectAvatar" type="file" @change="onChange($event)"/><br><br>
		</div>
		<div class="sub-container output">
				<label for="avatar">Image Preview:</label><br>
				<img class="img" id="avatar" />
		</div>
	</div>	
	<div class="container code">
		<div class="language-json ext-json code-container">
			<button class="copy" @click="copy($event)">copy</button>
			<pre class="language-js">
				<span class="lang"></span>
				<pre><code>{{ iconJson }}</code></pre>
			</pre>
		</div>
	</div>
</template>

<script>
export default {
	name: 'app',
	data() {
		return {
			iconName: "",
			iconJson: ""		
		}
	},
	methods: {
		async onChange(event) {
			  const file = event.target.files[0];
  			const base64 = await this.convertBase64(file);
				const icon = base64.split(",")[1]
				//console.log(base64)
  			avatar.src = base64;
				this.iconJson = {
					"addIcon": { 
						"name": this.iconName, 
						"image": icon 
						}
				}
		},

		convertBase64(file) {
			return new Promise((resolve, reject) => {
				const fileReader = new FileReader();
				fileReader.readAsDataURL(file);

				fileReader.onload = () => {
					resolve(fileReader.result);
				};

				fileReader.onerror = (error) => {
					reject(error);
				};
			});
		},

		copy(e) {
			let data = JSON.stringify(this.iconJson);
			navigator.clipboard.writeText(data)
		}


	}
}
</script>

<style scoped>
body {
	color: #e6e7e8!important;
}

.container {
	display: flex;
	flex-direction: row;
	height: auto;
	margin: 30px 0px 30px 0px;
	padding: 30px 0px 20px 0px;
	border-radius: 5px;
}

.sub-container {
	margin-left: 0px;
}

.img {
	padding-top: 10px;
	padding-left: 10px;
}

.code {
	margin: 0px;
	padding: 0px;
}

.code-container {
	width: 100%;
	overflow: hidden;
}

.copy {
	margin-left: 90%;
	margin-top: 10px;
	padding-left: 6px;
	width: 50px;
	height: 30px;
	text-align: center;
}

</style>
