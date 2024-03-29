<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\OrderController;
use App\Models\Order;
use Illuminate\Support\Facades\Auth;
use App\Models\Proposal;
use App\Models\User;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//Route::get('/index', function () {
//    return Inertia::render('Welcome', [
//        'canLogin' => Route::has('login'),
//        'canRegister' => Route::has('register'),
//        'laravelVersion' => Application::VERSION,
//        'phpVersion' => PHP_VERSION,
//    ]);
//})->name('index');

//USER CONTROLLER
Route::get('/profile/{user_id}',[\App\Http\Controllers\UserController::class, 'index'])->name('user_profile')->middleware('auth');
Route::get('/user/{id}',[\App\Http\Controllers\UserController::class, 'info'])->name('user_info')->middleware('auth');
Route::post('/user/{user}',[\App\Http\Controllers\UserController::class, 'update'])->name('user_update')->middleware('auth');

//ORDER CONTROLLER
Route::post('/store', [\App\Http\Controllers\OrderController::class, 'store'])->name('order.store');
Route::get('/', [\App\Http\Controllers\OrderController::class, 'main'])->name('main.page');
Route::get('/order/{id}', [\App\Http\Controllers\OrderController::class, 'details'])->name('order.details');
Route::post('/order/proposal', [\App\Http\Controllers\OrderController::class, 'new_proposal'])->name('order.proposal.store')->middleware('auth');
Route::get('/order/{order_id}/{proposal_id}/confirm_proposal', [\App\Http\Controllers\OrderController::class, 'proposal_confirm_form'])->name('confirm.proposal')->middleware('auth');
Route::get('/order/{order_id}/{proposal_id}/store_proposal_confirmation', [\App\Http\Controllers\OrderController::class, 'proposal_confirm'])->name('proposal.confirmation.store')->middleware('auth');
Route::get('/order/{order_id}/{proposal_id}/finish_order', [\App\Http\Controllers\OrderController::class, 'finish_order'])->name('finish_order')->middleware('auth');
Route::resource('orders', OrderController::class);

//DASHBOARD
Route::get('/chatify/{user_id}', [\App\Http\Controllers\DashboardController::class, 'start_chat'])->name('start_chat')->middleware('auth');
Route::get('/dashboard/frl', [\App\Http\Controllers\DashboardController::class, 'freelancer_dashboard_index'])->middleware('auth')->name('freelancer_dashboard_index');
Route::get('/dashboard/emp', [\App\Http\Controllers\DashboardController::class, 'employer_dashboard_index'])->middleware('auth')->name('employer_dashboard_index');
//Route::get('/storage/{name}', [\App\Http\Controllers\DashboardController::class, 'download_file'])->name('download_file');


//MAINPAGE CONTROLLERS
Route::get('/estimate', [\App\Http\Controllers\MainPageController::class, 'estimate_issue'])->name('estimate_issue');
Route::get('/private_policy', [\App\Http\Controllers\MainPageController::class, 'private_policy'])->name('private_policy');

require __DIR__.'/auth.php';
