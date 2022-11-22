import { Button, Dialog, TextField } from '@mui/material'
import { Button as MButton, Select } from '@mantine/core'
import { useState } from 'react'
import { Dialog as MDialog } from '@mantine/core'
import { Modal } from '@mantine/core'
import { TextInput } from '@mantine/core'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import dayjs, { Dayjs } from 'dayjs'
import { zhCN } from 'date-fns/locale'
import { DatePicker as MDatePicker, DateRangePicker as MDateRangePicker } from '@mantine/dates'
import 'dayjs/locale/zh-cn'
export default function Comparison() {
  const [muiDialog, setMuiDialog] = useState(false)
  const [mDialog, setMDialog] = useState(false)
  const [mModal, setMModal] = useState(false)
  const [data, setData] = useState([
    { value: 'react', label: 'React' },
    { value: 'ng', label: 'Angular' },
  ])
  const [value, setValue] = useState<Dayjs | null>(null)
  return (
    <div>
      <div>
        <strong>Button</strong>
      </div>
      <Button variant='outlined' className='mr-2'>
        MUI
      </Button>
      <Button variant='contained' className='mr-2'>
        MUI
      </Button>
      <Button variant='text' className='mr-2'>
        MUI
      </Button>
      <MButton variant='subtle'>Mantine</MButton>
      <MButton variant='filled'>Mantine</MButton>
      <MButton variant='gradient'>Mantine</MButton>
      <MButton variant='outline'>Mantine</MButton>
      <MButton variant='light'>Mantine</MButton>
      <MButton variant='white'>Mantine</MButton>
      <MButton variant='default'>Mantine</MButton>
      <br />
      button matine样式更多一些
      <br />
      <div>
        <strong>Dialog</strong>
      </div>
      <Button variant='contained' className='mr-2' onClick={() => setMuiDialog(true)}>
        MUI Dialog
      </Button>
      <MButton variant='gradient' onClick={() => setMDialog(true)} className='mr-2'>
        Mantine Dialog
      </MButton>
      <MButton variant='gradient' onClick={() => setMModal(true)}>
        Mantine Modal
      </MButton>
      <br />
      <div>
        mantine的dialog是用相对定位写的，所以不太容易居中，但是比mui容易控制长宽，mui的dialog只能用几个预设值，比较麻烦
      </div>
      <div>mantine的dialog应该是modal组件而不是dialog，dialog更适合做一个小标框</div>
      <div>
        modal更像是dialog，和mui差不多，但是大小好控制，功能更全一些，自带一个左上角的关闭图标
      </div>
      <br />
      <div>
        <strong>textfield</strong>
      </div>
      <TextField id='outlined-basic' label='mui' variant='outlined' />
      <TextInput placeholder='Your comment' label='Mantine' error='' />
      <div>两者差不多，样式上mui更粗壮，mantine更纤细，mui功能更强大一些，但是难用</div>
      <div>
        <strong>select</strong>
      </div>
      mantine select可搜索，可直接增加,可分组
      <Select
        placeholder='Pick one'
        label='mantine select'
        searchable
        creatable
        getCreateLabel={query => `+ Create ${query}`}
        onCreate={query => {
          const item = { value: query, label: query }
          setData(current => [...current, item])
          return item
        }}
        required
        error
        data={data}
      />
      <div>
        select
        不论怎么样都比mui好用多了，mui的太难用，但是mui的select可以用textfield代替，但还是不好用
      </div>
      <div>
        <strong>datepicker</strong>
      </div>
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={zhCN}>
        <DatePicker
          views={['year']}
          label='mui'
          value={!!value ? value.toString() : null}
          minDate={dayjs('1949-1-1')}
          maxDate={dayjs().add(1, 'years')}
          onChange={e => setValue(e)}
          renderInput={params => (
            <TextField
              variant='standard'
              {...params}
              // error={error !== undefined}
              // helperText={error?.message}
            />
          )}
        />
      </LocalizationProvider>
      <MDatePicker placeholder='mantine' label='mantine' withAsterisk locale='zh-cn' />;
      <MDateRangePicker
        label='Book hotel'
        placeholder='Pick dates range'
        // value={value}
        locale='zh-cn'
        // onChange={setValue}
      />
      <div>mantine的日期选择器好用一些，而且rangepicker不需要license，mui需要收费</div>
      <div>
        <strong>tab</strong>
      </div>
      <div>没太大区别，主要是用的功能都是基本功能</div>
      <div>
        <strong>table</strong>
      </div>
      <div>mantine只有基本功能，mui功能相对多一些，具体看文档示例即可</div>
      <Dialog open={muiDialog}>
        <div className='w-[800px] h-[1200px]'>
          <Button variant='contained' className='mr-2' onClick={() => setMuiDialog(false)}>
            取消
          </Button>
          <Button variant='contained' className='mr-2' onClick={() => setMuiDialog(false)}>
            确定
          </Button>
        </div>
      </Dialog>
      <MDialog opened={mDialog} position={{ top: 40, left: 40 }} size={1000}>
        <div className='w-[1100px] h-[800px]'>
          <MButton variant='gradient' onClick={() => setMDialog(false)}>
            取消
          </MButton>
          <MButton variant='gradient' onClick={() => setMDialog(false)}>
            确认
          </MButton>
        </div>
      </MDialog>
      <Modal
        opened={mModal}
        // withCloseButton={false}
        centered
        size='auto'
        trapFocus
        onClose={() => {}}
      >
        <div className='w-[1100px] h-[800px]'>
          <MButton variant='gradient' onClick={() => setMModal(false)}>
            取消
          </MButton>
          <MButton variant='gradient' onClick={() => setMModal(false)}>
            确认
          </MButton>
        </div>
      </Modal>
    </div>
  )
}
