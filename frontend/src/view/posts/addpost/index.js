import React, { Component } from 'react'

export default class AddPost extends Component {
    render() {
        return (
            <>
                 <div class="page-header">
                <div class="page-block">
                    <div class="row align-items-center">
                        <div class="col-md-12">
                            <div class="page-header-title">
                                <h5 class="m-b-10">Add New Post</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page-wrapper">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card Recent-Users">
                            <div class="card-header">
                                <h5>Posts</h5>
                            </div>
                            <div class="card-block">
                                <div class="card-block px-0 py-3">
                                    <div class="table-responsive">
                                        <table class="table table-hover">
                                            <tbody>
                                                <tr class="unread">
                                                    <td><img class="rounded-circle" src="assets/images/user/avatar-1.jpg" alt="activity-user" /></td>
                                                    <td>
                                                        <h6 class="mb-1">Isabella Christensen</h6>
                                                    </td>
                                                    <td>
                                                        <h6 class="text-muted"><i class="fas fa-circle text-c-green f-10 m-r-15"></i>11 MAY 12:56</h6>
                                                    </td>
                                                    <td><a href="#!" class="label theme-bg2 text-white f-12">Reject</a><a href="#!" class="label theme-bg text-white f-12">Approve</a></td>
                                                </tr>


                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </>
        )
    }
}
