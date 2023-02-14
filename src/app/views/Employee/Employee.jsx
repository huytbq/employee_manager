import React, { useState, useEffect } from 'react';
import { Button, IconButton, Icon, Grid, TextField } from '@material-ui/core'
import MaterialTable from "material-table";
import { ConfirmationDialog, Breadcrumb } from 'egret'
import { getEmployees, addEmployees, editEmployees, deleteEmployees, setOpenDialog, setCloseDialog } from 'app/redux/actions/EmployeeActions';
import { useDispatch, useSelector } from 'react-redux';
import EmployeeDialog from './EmployeeDialog';


export default function Employee({ t }) {
    const dispatch = useDispatch();
    const employees = useSelector(state => state.employee.list);
    const openEmployeeDialog = useSelector(state => state.employee.openDialog);
    // console.log("employees: ", employees);
    const [typeDialog, setTypeDialog] = useState('add');
    const [currentData, setCurrentData] = useState({});
    // const [openEmployeeDialog, setOpenEmployeeDialog] = useState(false);
    const [openConfirmDeleteDialog, setOpenConfirmDeleteDialog] = useState(false);
    const [searchValue, setSearchValue] = useState('');


    const columns = [
        {
            title: 'Code',
            field: 'code'
        },
        {
            title: 'Họ và tên',
            field: 'name'
        },
        {
            title: 'Tuổi',
            field: 'age'
        },
        {
            title: 'Email',
            field: 'email'
        },
        {
            title: 'Số điện thoại',
            field: 'phone'
        },
        {
            title: 'Hành động',
            field: 'action',
            render: (rowData) => (
                <>
                    <IconButton
                        onClick={() => {
                            setTypeDialog('update');
                            setCurrentData(rowData);
                            dispatch(setOpenDialog());
                        }}
                    >
                        <Icon color="primary">edit</Icon>
                    </IconButton>
                    <IconButton
                        onClick={() => {
                            setCurrentData(rowData);
                            setOpenConfirmDeleteDialog(true)
                        }}
                    >
                        <Icon color="error">delete</Icon>
                    </IconButton>
                </>
            )
        }
    ]

    const handleAddNewEmployee = (newEmployeeData) => {
        dispatch(addEmployees(newEmployeeData));
    }

    const handleUpdateEmployee = (newEmployeeData) => {
        dispatch(editEmployees(newEmployeeData));
    }

    const handleDeleteEmployee = (employeeData) => {
        dispatch(deleteEmployees(employeeData));
        setOpenConfirmDeleteDialog(false);
    }

    const handleFilter = (employee) => {
        if (searchValue === '') return true;
        if (
            employee.code.toLowerCase().includes(searchValue.toLowerCase()) ||
            employee.email.toLowerCase().includes(searchValue.toLowerCase()) ||
            employee.name.toLowerCase().includes(searchValue.toLowerCase()) ||
            employee.phone.toLowerCase().includes(searchValue.toLowerCase()) ||
            employee.age.toString().toLowerCase().includes(searchValue.toLowerCase())
        )
            return true;
        return false;
    }

    useEffect(() => {
        // debugger
        dispatch(getEmployees());

    }, []);

    return (
        <div className="m-sm-30" >

            <div className="mb-sm-30">
                <Breadcrumb routeSegments={[{ name: t("Dashboard.category"), path: "/directory/employees" }, { name: 'Nhân viên' }]} />
            </div>

            <Grid container spacing={2}>
                <Grid item container justify="space-between">
                    <Grid item>
                        <Button variant="contained"
                            color="primary"
                            onClick={() => {
                                setTypeDialog('add');
                                dispatch(setOpenDialog());
                            }}
                        >Thêm mới</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            value={searchValue}
                            size="small"
                            placeholder="Tìm kiếm..."
                            variant="outlined"
                            fullWidth
                            onChange={(e) => setSearchValue(e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Grid item>
                    <MaterialTable
                        title={'Danh sách nhân viên'}
                        data={employees.filter(item => handleFilter(item))}
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
            {
                openEmployeeDialog && <EmployeeDialog
                    closeDialog={() => dispatch(setCloseDialog())}
                    type={typeDialog}
                    currentData={typeDialog === 'add' ? {} : currentData}
                    submitData={(newEmployeeData) => (typeDialog === 'add') ? handleAddNewEmployee(newEmployeeData) : handleUpdateEmployee(newEmployeeData)}
                />
            }
            {
                openConfirmDeleteDialog && <ConfirmationDialog
                    open={openConfirmDeleteDialog}
                    onConfirmDialogClose={() => setOpenConfirmDeleteDialog(false)}
                    onYesClick={() => handleDeleteEmployee(currentData)}
                    title={t("confirm")}
                    text={t('general.deleteConfirm')}
                    Yes={t('Yes')}
                    No={t('No')}
                />
            }
        </div >
    )
}
