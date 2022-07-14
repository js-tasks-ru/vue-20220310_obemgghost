<template>
  <div class="image-uploader">
    <label class="image-uploader__preview" :class="{ 'image-uploader__preview-loading': state === 'loading' }">
      <span class="image-uploader__text">{{ text }}</span>
      <input
        ref="fileInput"
        v-bind="$attrs"
        type="file"
        accept="image/*"
        class="image-uploader__input"
        @click="fileCheck"
        @change="fileChange" />
    </label>
  </div>
</template>

<script>
export default {
  name: 'UiImageUploader',

  inheritAttrs: false,

  props: {
    preview: String,
    uploader: Function,
  },

  emits: ['select', 'upload', 'error', 'remove'],

  data(){
    return {
      state: this.preview ? 'uploaded' : 'empty',
    }
  },

  computed: {
    previewImage() {
      return this.preview ? `url(${this.preview})` : 'var(--default-cover)';
    },
    text() {
      if( this.state === 'loading' ) {
        return "Загрузка...";
      } else if(this.state === 'empty' ) {
        return "Загрузить изображение";
      } else {
        return "Удалить изображение";
      }
    }
  },

  methods: {
    fileCheck($event){
      if(this.state === 'uploaded') {
        $event.preventDefault();
        this.$refs['fileInput'].value = null;
        this.$emit('remove');
        this.state = 'empty';
      }
    },

    fileChange(){
      this.state = 'loading';
      const file = new File(this.$refs?.fileInput?.files, 'newFile');

      if(this.uploader) {
        this.uploader(file)
          .then((res) => {
            this.$emit('upload', res);
          })
          .then(
            () => {
              this.state = 'uploaded';
            },
            (err) => {
              this.$emit('error', err);
              this.state = 'empty';
            }
          )
      } else {
        this.state = 'uploaded';
      }
      this.$emit('select', this.$refs?.fileInput?.files[0]);
      this.$refs.fileInput.value = null;
    }
  }
};
</script>

<style scoped>
.image-uploader {
}

.image-uploader__input {
  opacity: 0;
  height: 0;
}

.image-uploader__preview {
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), v-bind(previewImage);
  border: 2px solid var(--blue-light);
  border-radius: 8px;
  transition: 0.2s border-color;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 512px;
  height: 228px;
}

.image-uploader__text {
  color: var(--white);
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
}

.image-uploader__preview:hover {
  border-color: var(--blue);
}

.image-uploader__preview.image-uploader__preview-loading {
  cursor: no-drop;
}
</style>
