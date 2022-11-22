# Mantine Mui 对比
### 组件对比
#### 常用组件
* button： matine样式更多一些
* Dialog：mantine的dialog是用相对定位写的，所以不太容易居中，但是比mui容易控制长宽，mui的dialog只能用几个预设值，比较麻烦。mantine的dialog应该是modal组件而不是dialog，dialog更适合做一个小标框。modal更像是dialog，和mui差不多，但是大小好控制，功能更全一些，自带一个左上角的关闭图标
* Textfield：两者差不多，样式上mui更粗壮，mantine更纤细，mui功能更强大一些，但是难用
* Select：mantine select可搜索，可直接增加,可分组，mui select基本用法可以使用select组件，也可以使用textfield的select功能，总体上mantine的更好用
* Datepicker：mantine的日期选择器好用一些，而且mantine rangepicker不需要license，mui需要收费
* Tab： 没区别
* Table： mantine功能太简陋，不如mui

#### tailwind
打包过后mui组件会覆盖tailwindcss，但是mantine里，tailwindcss优先级更高，不会被覆盖
