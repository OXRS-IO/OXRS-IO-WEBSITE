<template>
	<div class="container">
		<div class="sub-container">
			<label for="icon">Type:</label><br><br>
			<select v-model="selected">
				<option>Icon</option>
				<option>Background Image</option>
			</select><br><br>
			<label for="icon">Name:</label><br><br>
			<input v-bind:class="{ 'text-danger': hasError }"
						 type="text"
						 id="icon-name"
						 name="icon"
						 v-model="iconName"
						 @input="inputHandler"
						 placeholder="enter icon"
						 required><br><br>
			<label for="selectAvatar">Upload Image:</label><br><br>
			<input id="selectAvatar"
						 type="file"
						 @change="onChange($event)" /><br><br>
		</div>
		<div class="sub-container output">
			<label for="avatar">Image Preview:</label><br>
			<img class="img"
					 id="avatar" />
		</div>
	</div>
	<div class="container code">
		<div class="language-json ext-json code-container">
			<button class="copy"
							@click="copy($event)">copy</button>
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
			selected: "Icon",
			iconName: "",
			iconJson: "",
			hasError: false,
		}
	},
	methods: {
		async onChange(event) {
			if (this.iconName === "") {
				this.hasError = true
				event.target.value = '';
				return
			}
			const file = event.target.files[0];
			const base64 = await this.convertBase64(file);
			avatar.src = base64;
			if (this.selected === "Icon") {
				this.iconJson = {
					"addIcon": {
						"name": this.iconName,
						"imageBase64": base64.split(",")[1]
					}
				}
			}
			if (this.selected === "Background Image") {
				this.iconJson = {
					"addImage": {
						"name": this.iconName,
						"imageBase64": base64.split(",")[1]
					}
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
		},

		inputHandler(e) {
			if (this.iconName == "" && selectAvatar.files.length == 1) {
				let poo = JSON.parse(JSON.stringify(this.iconJson))
				this.hasError = true
				poo.addIcon.name = ""
				this.iconJson = poo
			}
			if (this.iconName !== "" && selectAvatar.files.length !== 0) {
				let poo = JSON.parse(JSON.stringify(this.iconJson))
				this.hasError = false
				poo.addIcon.name = this.iconName
				this.iconJson = poo
			}
		}
	}
}
</script>

<style scoped>
body {
	color: #e6e7e8 !important;
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

.text-danger {
	border: 1px red solid;
	border-radius: 2px;
	padding: 2px;
}
</style>
