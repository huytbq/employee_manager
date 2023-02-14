import React, { useEffect } from "react"
import { Button, IconButton, Icon, Grid, TextField } from '@material-ui/core'
import MaterialTable from "material-table"
import { ConfirmationDialog, Breadcrumb } from 'egret'
import { useDispatch, useSelector } from 'react-redux'
import { getCommunes } from "app/redux/actions/CommuneActions"

function Commune() {

    const dispatch = useDispatch()
    const communes = useSelector((state) => state.commune.list)

    useEffect(() => {
        dispatch(getCommunes())
    }, [])
    console.log(communes);

    const columns = [
        { title: "Code", field: "code" },
        { title: "Tên xã", field: "name" },
    ]

    return (
        <div className="m-sm-30" >

            <div className="mb-sm-30">
                <Breadcrumb routeSegments={[{ name: "Địa chỉ", path: "/address/commune" }, { name: 'Xã' }]} />
            </div>

            <Grid container spacing={2}>
                <Grid item container justify="space-between">
                    <Grid item>
                        <Button variant="contained"
                            color="primary"
                        >Thêm mới</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            value={''}
                            size="small"
                            placeholder="Tìm kiếm..."
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>
                </Grid>
                <Grid item>
                    <MaterialTable
                        title={'Danh sách xã'}
                        data={communes}
                        columns={columns}
                        options={{
                            rowStyle: (rowData, index) => {
                                return ({
                                    backgroundColor: (index % 2 === 1) ? '#EEE' : '#FFF'
                                })
                            },
                            maxBodyHeight: '450px',
                            minBodyHeight: '370px',
                            headerStyle: {
                                backgroundColor: '#358600',
                                color: '#fff',
                            },
                            padding: 'dense',
                            search: false,
                            exportButton: true,
                            // toolbar: false
                        }}
                    />
                </Grid>
            </Grid>
        </div >
    )
}

export default Commune