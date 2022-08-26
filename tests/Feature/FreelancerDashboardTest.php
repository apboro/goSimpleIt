<?php

namespace Tests\Feature;

use App\Models\Order;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Support\Facades\Auth;
use Tests\TestCase;


class FreelancerDashboardTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_can_render_freelancer_dashboard_page()
    {
        $this->seed();
        $user = User::where('role','Freelancer')->first();
        Auth::login($user);

        $response = $this->withoutExceptionHandling()->get('/dashboard/frl');

        $response->assertStatus(200);
    }
}
